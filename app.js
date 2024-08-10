// // Import necessary modules
// // import cors from 'cors';
// // express.use(cors());
// const express = require('express');
// const cors = require('cors');

// // Create an instance of express
// const app = express();

// // Setup static folder
// app.use(express.static('public'));

// // Enable parsing of application/x-www-form-urlencoded data
// app.use(express.urlencoded({ extended: false }));

// // Enable parsing of application/json data
// app.use(express.json());

// // Enable CORS for all routes
// app.use(cors());

// // Define routes here
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Start the server
// const PORT = process.env.PORT || 3011;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// POST route to greet in a specific language
app.post('/api/greet', (req, res) => {
  const { language, greeting } = req.body;
  res.json({ message: `Greeting in ${language} is: ${greeting}` });
});

// GET route to greet a user in a specific language
app.get('/api/greet', (req, res) => {
  const { name, language } = req.query;
  res.json({ message: `Hello ${name}, greeting in ${language}` });
});

const PORT = process.env.PORT || 3011;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
