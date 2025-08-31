const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Serve static files (CSS, JS, images)
app.use(express.static('public'));

// Home route (HTML with CSS)
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h1>Welcome to My Express App 🚀</h1>
        <p>Go to <a href="/file">/file</a> to read file content</p>
        <p>Go to <a href="/api/user">/api/user</a> to see JSON API</p>
      </body>
    </html>
  `);
});

// Route to read file.txt
app.get('/file', (req, res) => {
  const filePath = path.join(__dirname,  'file.txt');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file.');
    res.send(`<pre>${data}</pre>`);
  });
});


// Use Render’s dynamic port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
