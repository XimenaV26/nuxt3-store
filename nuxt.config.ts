// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false,
  app: {
    head: {
      title: "Nuxt store",
      meta: [
        {
          name: "Product store with Nuxt 3",
          content: "Product store develop with Nuxt 3",
        },
      ],
      link: [
        {
          rel: "stylesheet ",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
        },
      ],
    },
  },
});
