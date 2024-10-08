const { open } = require('fs/promises');

(async () => {
  const file = await open('./filesystem/notes.txt');

  for await (const line of file.readLines()) {
    console.log(line);
  }
})();