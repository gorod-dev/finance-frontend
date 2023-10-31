import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, PluginOption } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';
import notifier from 'vite-plugin-notifier';
import svgr from 'vite-plugin-svgr';
import { ViteAliases } from 'vite-aliases';

const projectRootDir = path.resolve(__dirname);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    macrosPlugin(),
    react(),
    notifier() as PluginOption,
    svgr(),
    ViteAliases({
      dir: 'src',
      prefix: '@/',
    }),
  ],
  server: {
    port: 3030,
  },
});
