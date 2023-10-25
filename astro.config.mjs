import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx()],
  output: "server",
  srcDir: "deck",
  publicDir: "dock",
  adapter: node({
    mode: "standalone"
  })
});