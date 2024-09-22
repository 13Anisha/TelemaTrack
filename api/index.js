// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import userRoutes from './routes/user.route.js';
// import authRoutes from './routes/auth.route.js';
// import cookieParser from 'cookie-parser';
// import path from 'path';


// // Get the directory name of the current module file
// const __dirname = dirname(fileURLToPath(import.meta.url));

// // Load the environment variables from the .env file located outside the api directory
// dotenv.config({ path: `${__dirname}/../.env` });

// const app = express();
// const PORT = 3000;

// mongoose
//   .connect(process.env.MONGO)
//   .then(() => {
//     console.log('MongoDb is connected');
//   })
//   .catch((err) => {
//     console.log(err);
//   });



//   app.use(express.json());
//   app.use(cookieParser());
  
//   app.listen(3000, () => {
//     console.log('Server is running on port 3000!');
//   });
  
//   app.use('/api/user', userRoutes);
//   app.use('/api/auth', authRoutes);
 
  
//   app.use(express.static(path.join(__dirname, '/client/dist')));
  
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
//   });
  
//   app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500;
//     const message = err.message || 'Internal Server Error';
//     res.status(statusCode).json({
//       success: false,
//       statusCode,
//       message,
//     });
//   });



// ai integration


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import { exec } from 'child_process';

// Get the directory name of the current module file
const __dirname = dirname(fileURLToPath(import.meta.url));

// Load the environment variables from the .env file located outside the api directory
dotenv.config({ path: `${__dirname}/../.env` });

const app = express();
const PORT = 3000;

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// API route to execute the Python script and return the AI model's output
app.get('/api/alerts', (req, res) => {
  exec('C:\\Users\\Anisha\\miniconda3\\envs\\AI_Model\\python.exe ./scripts/ai_model.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ error: 'Failed to generate alerts' });
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return res.status(500).json({ error: 'Script error' });
    }
    try {
      // Parse the output if it's JSON
      res.json(JSON.parse(stdout));
    } catch (parseError) {
      console.error(`Parse Error: ${parseError.message}`);
      res.status(500).json({ error: 'Failed to parse script output' });
    }
  });
});

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
