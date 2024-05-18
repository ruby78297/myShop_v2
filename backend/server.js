import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();
import products from './data/products.js';
const port = process.env.PORT || 5000;

await connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Endpoint to get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Endpoint to get a single product by ID
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find((product) => product._id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
