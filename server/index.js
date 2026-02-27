require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;
const url = process.env.MONGODB_URL;

let db;

async function connectDB() {
  const client = new MongoClient(url);
  await client.connect();
  db = client.db('myNewProjectDB');
  console.log('MongoDB connected');
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Example route using the database
app.get('/users', async (req, res) => {
  const users = await db.collection('users').find({}).toArray();
  res.json(users);
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});