import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHatWizard, faRobot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faHatWizard, faRobot, faLinkedin, faGithub);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');