const fs = require('fs');
const mimetypes = require('./mimetypes.json');

const alfredItems = []
for (k in mimetypes) {
    alfredItems.push({
        title: k,
        subtitle: mimetypes[k]
    });
}

const filename = 'items.json'

// console.log(alfredItems)

if (fs.existsSync(filename)) {
    fs.rmSync(filename)
}

const output = {}
output.items = alfredItems

const outputText = JSON.stringify(output, null, '  ')

fs.writeFile(filename, outputText, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('File created');
});
