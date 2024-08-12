export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:beforeMount', () => {
      document.querySelectorAll("[data-background]").forEach((element) => {
        element.style.backgroundImage = `url(${element.getAttribute("data-background")})`;
      });
    });
  });
  