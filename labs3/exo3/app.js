const { readFileContent } = require('./ReadFile');

const filePath = 'test.txt';

readFileContent(filePath)
  .then((data) => {
    console.log('File content:', data);
  })
  .catch((err) => {
    console.error('Error reading the file:', err);
  });
