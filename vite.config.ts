// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Fully static site: every page is prerendered to plain HTML at build time
    // so the output can be hosted on any static host (GitHub Pages, Netlify, GoDaddy).
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/contact" },
      { path: "/projects" },
      { path: "/projects/project-one" },
      { path: "/projects/project-two" },
      { path: "/projects/project-three" },
      { path: "/projects/project-four" },
      { path: "/projects/project-five" },
      { path: "/projects/project-six" },
    ],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
