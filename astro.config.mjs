// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Your custom domain
  site: "https://gitoso.zip",

  // Generate clean URLs: /blog/ instead of /blog.html
  trailingSlash: "always",

  // Output static HTML files (default, but explicit is better)
  output: "static",
});
