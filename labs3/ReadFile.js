const fs = require('fs');

// Check if a file path is provided as a command-line argument
if (process.argv.length < 3) {
  console.error('Usage: node ReadFile.js <file-path>');
  process.exit(1);
}

// Get the file path from the command-line arguments
const filePath = process.argv[2];

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    process.exit(1);
  }

  // Display the file content
  console.log(`File content:\n${data}`);
});

