const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package
const authRoutes = require('./router/authRoutes');
const userRoutes = require('./router/userRoutes');
require('dotenv').config();
const app = express();

const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Route to handle file upload
app.post('/uploads', upload.single('pdfFile'), (req, res) => {
  res.json({ message: 'File uploaded successfully' });
});

app.use(express.static('uploads'));

app.use(cors()); // Use cors middleware to allow all origins

app.use(bodyParser.json());

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use('/', authRoutes);
app.use('/', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
