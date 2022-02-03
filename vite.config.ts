import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, PluginOption } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';
import notifier from 'vite-plugin-notifier';
import svgr from 'vite-plugin-svgr';

const projectRootDir = path.resolve(__dirname);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [macrosPlugin(), react(), notifier() as PluginOption, svgr()],
  resolve: {
    alias: [{ find: 'src', replacement: path.resolve(projectRootDir, 'src') }],
  },
});
