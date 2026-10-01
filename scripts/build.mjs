import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { Script } from 'node:vm';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
if (!/^\s*<!doctype html>/i.test(html)) {
  throw new Error('index.html deve conter HTML em UTF-8. Conteúdo Base64 não pode ser publicado como HTML.');
}
for (const match of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) {
  new Script(match[1], { filename: 'index.html' });
}
const output = new URL('../dist/', import.meta.url);
await mkdir(output, { recursive: true });
await writeFile(new URL('index.html', output), html, 'utf8');
console.log('HTML e JavaScript validados; dist/index.html pronto para publicação.');
