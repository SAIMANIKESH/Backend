import axios, { AxiosRequestConfig } from 'axios';
import { Request, Response } from 'express';
import { Agent } from 'http';

import { getDb } from '../db/db';
import { User } from '../models/User';
import { Post, Comment } from '../models/Post';


export const loadData = async (req: Request, res: Response) => {
  try {
    const httpAgent = new Agent({ family: 4 });
    const axiosConfig: AxiosRequestConfig = { timeout: 10000, httpAgent, proxy: false };

    const [usersRes, postsRes, commentsRes] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/users', axiosConfig),
      axios.get('https://jsonplaceholder.typicode.com/posts', axiosConfig),
      axios.get('https://jsonplaceholder.typicode.com/comments', axiosConfig),
    ]);


    const users = usersRes.data as User[];
    const posts = postsRes.data as Post[];
    const comments = commentsRes.data as Comment[];

    const db = getDb();
    const usersCollection = db.collection('users');
    const postsCollection = db.collection('posts');
    const commentsCollection = db.collection('comments');

    // Clear existing data before inserting
    await Promise.all([
      usersCollection.deleteMany({}),
      postsCollection.deleteMany({}),
      commentsCollection.deleteMany({}),
    ]);

    // Attach comments to posts
    const postsWithComments = posts.map((post: any) => {
      post.comments = comments.filter((c: any) => c.postId === post.id);
      return post;
    });

    // Insert data
    await usersCollection.insertMany(users);
    await postsCollection.insertMany(postsWithComments);
    await commentsCollection.insertMany(comments);

    res.status(200).json({ message: 'loaded data into DB' });
  } catch (err) {
    console.error('❌ Error in /load:', err);
    res.status(500).json({ error: 'Failed to load data' });
  }
};
