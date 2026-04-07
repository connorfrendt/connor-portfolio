import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faBars, faCaretDown, faCaretUp, faEnvelope, faQuoteLeft, faQuoteRight, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './assets/tailwind.css'

library.add(faLinkedin, faGithub, faBars, faCaretDown, faCaretUp, faEnvelope, faQuoteLeft, faQuoteRight, faArrowRight, faUpRightFromSquare);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueRouter);

// Scroll-triggered animation directive
Vue.directive('animate', {
  inserted(el, binding) {
    const delay = binding.value || 0;
    el.style.transitionDelay = delay + 'ms';
    el.classList.add('animate-hidden');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('animate-visible');
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(el);
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');