import express from 'express';

import { connectToDb } from './db/db';
import loadRoutes from './routes/load.routes';
import userRoutes from './routes/user.routes';



const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(loadRoutes);
app.use(userRoutes);

app.get('/', (req, res) => {
  res.send('🚀 Server is running!');
});

// Connect to MongoDB and start server
const start = async () => {
  await connectToDb();
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
};

start().catch((error) => {
  console.error('Error starting server:', error);
  process.exit(1);
});
