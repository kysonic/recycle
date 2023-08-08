import { defineConfig } from 'vite';
import { resolve } from 'path';
import mkcert from 'vite-plugin-mkcert';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  server: { https: true, host: true },
  plugins: [mkcert(), handlebars({
    partialDirectory: resolve(__dirname, 'src/partials'),
  })],
});
