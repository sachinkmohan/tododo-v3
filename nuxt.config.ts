// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt"],

  vite: {
    server: {
      hmr: {
        overlay: false,
      },
    },
  },
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  pwa: {
    registerWebManifestInRouteRules: true,
    manifest: {
      name: "Tododo-V3",
      short_name: "Tododo",
      description: "A todo app",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
      icons: [
        {
          src: "icons/icon-64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/wiki-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },

        {
          src: "icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      screenshots: [
        {
          src: "pwa/richer-ui/for-desktop-unsplash.jpg",
          sizes: "1920x1279",
          type: "image/jpg",
          form_factor: "wide",
          label: "For desktop",
        },
        {
          src: "pwa/richer-ui/for-mobile-unsplash.jpg",
          sizes: "640x960",
          type: "image/jpg",
          form_factor: "narrow",
          label: "For mobile",
        },
      ],
    },
    workbox: {
      globDirectory: "dist",
      globPatterns: ["**/*.{js,css}"],
      globIgnores: ["**/node_modules/**/*", "sw.js", "workbox-*.js"],
    },
    devOptions: {
      enabled: true,
      type: "module",
      navigateFallback: "/",
    },
  },
});
