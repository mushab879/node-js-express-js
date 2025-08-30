const fs = require('fs');

// Asynchronous (Non-blocking)
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); // This runs later when file is ready
});

console.log("This runs immediately, without waiting for file");
