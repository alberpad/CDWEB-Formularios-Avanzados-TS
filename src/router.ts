import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import routes from './routes';

Vue.use(Router);

const router: Router = new Router({
  routes,
});

export default router;
