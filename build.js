const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const output = path.join(root, 'dist');

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

// Publica a página inicial e todas as páginas individuais de cases e artigos.
for (const entry of ['index.html', 'artigos', 'cases']) {
  const source = path.join(root, entry);
  const destination = path.join(output, entry);
  if (fs.existsSync(source)) {
    fs.cpSync(source, destination, { recursive: true });
  }
}

console.log('Portfólio pronto para publicação em dist/.');
