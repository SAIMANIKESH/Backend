import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017'; // Local MongoDB URI
const client = new MongoClient(uri);

// Call this once in server.ts
export const connectToDb = async () => {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
    process.exit(1); // Exit if DB fails to connect
  }
};

// To access DB from anywhere
export const getDb = () => client.db('swift'); // Use swift DB
