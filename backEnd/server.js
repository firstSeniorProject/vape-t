const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const app = express();
const routes=require('./Routers/productsRoute.js')
app.use('/api/product',routes)
app.use('/api',routes)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(port, () => console.log(`Server started on port ${port}`));