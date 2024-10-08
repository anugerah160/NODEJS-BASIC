const { open } = require('fs/promises');
const path = require('path')
const tes = path.resolve(__dirname, 'notes.txt');
(async () => {
  const file = await open(tes);

  for await (const line of file.readLines()) {
    console.log(line);
  }
})();