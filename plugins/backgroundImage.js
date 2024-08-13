// plugins/backgroundImageDirective.js
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('background', {
      mounted(el) {
        const backgroundImage = el.getAttribute('data-background');
        if (backgroundImage) {
          el.style.backgroundImage = `url('${backgroundImage}')`;
        }
      },
      updated(el) {
        const backgroundImage = el.getAttribute('data-background');
        if (backgroundImage) {
          el.style.backgroundImage = `url('${backgroundImage}')`;
        }
      },
      getSSRProps(binding, vnode) {
        // Provide SSR-specific props if needed
        return {};
      }
    });
  });
  