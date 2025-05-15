import { Request, Response } from 'express';

import { getDb } from '../db/db';


export const deleteAllUsers = async (req: Request, res: Response) => {
  try {
    const db = getDb();
    const result = await db.collection('users').deleteMany({});
    res.status(200).json({ message: `Deleted ${result.deletedCount} users.` });
  } catch (err) {
    console.error('❌ Error deleting users:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);

  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  const db = getDb();
  const usersCollection = db.collection('users');
  const postsCollection = db.collection('posts');
  const commentsCollection = db.collection('comments');

  try {
    // Check if user exists
    const user = await usersCollection.findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ error: `User-${userId} not found to delete` });
    }

    // Find user's posts
    const userPosts = await postsCollection.find({ userId }).toArray();
    const postIds = userPosts.map(post => post.id);

    // Delete user
    await usersCollection.deleteOne({ id: userId });

    // Delete related posts
    await postsCollection.deleteMany({ userId });

    // Delete comments related to the deleted posts
    await commentsCollection.deleteMany({ postId: { $in: postIds } });

    res.status(200).json({ message: `User-${userId} related data deleted successfully` });
  } catch (err) {
    console.error('❌ Error deleting user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);

  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  const db = getDb();
  const usersCollection = db.collection('users');
  const postsCollection = db.collection('posts');
  const commentsCollection = db.collection('comments');

  try {
    // Get user
    const user = await usersCollection.findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ error: `User-${userId} not found` });
    }

    // Get posts by user
    const posts = await postsCollection.find({ userId }).toArray();

    // For each post, attach its comments
    for (const post of posts) {
      const postComments = await commentsCollection.find({ postId: post.id }).toArray();
      post.comments = postComments;
    }

    const userWithPosts = {
      ...user,
      posts
    };

    res.status(200).json(userWithPosts);
  } catch (err) {
    console.error('❌ Error getting user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const newUser = req.body;

  if (!newUser || typeof newUser.id !== 'number') {
    return res.status(400).json({ error: 'Invalid user data' });
  }

  const db = getDb();
  const usersCollection = db.collection('users');

  try {
    const existingUser = await usersCollection.findOne({ id: newUser.id });
    if (existingUser) {
      return res.status(400).json({ error: `User-${newUser.id} already exists.` });
    }

    await usersCollection.insertOne(newUser);

    res.status(201).json(newUser);
  } catch (err) {
    console.error('❌ Error adding user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUsersWithPagination = async (req: Request, res: Response) => {
  const db = getDb();
  const usersCollection = db.collection('users');

  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const sortBy = req.query.sort as string || 'id'; // default sort by id
  const order = (req.query.order as string)?.toLowerCase() === 'desc' ? -1 : 1;

  const skip = (page - 1) * limit;

  try {
    const users = await usersCollection
      .find({})
      .sort({ [sortBy]: order })
      .skip(skip)
      .limit(limit)
      .toArray();

    res.status(200).json({ page, limit, sortBy,
      order: order === 1 ? 'asc' : 'desc', users });
  } catch (err) {
    console.error('❌ Error fetching users with pagination:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
