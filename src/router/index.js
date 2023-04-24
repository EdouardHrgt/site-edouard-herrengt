import Vue from 'vue';
import VueRouter from 'vue-router';
// import createWebHistory from 'vue-router'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/experiences',
    name: 'Experiences',
    component: () => import(/* webpackChunkName: "experiences" */ '../views/Experience.vue'),
  },
  {
    path: '/formations',
    name: 'Formations',
    component: () => import(/* webpackChunkName: "formation" */ '../views/Formation.vue'),
  },
  {
    path: '/competences',
    name: 'Competences',
    component: () => import(/* webpackChunkName: "competences" */ '../views/Competence.vue'),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "competences" */ '../views/Portfolio.vue'),
  },
];

const router = new VueRouter({
  // history: createWebHistory(),
  mode: 'history',
  routes,
});

export default router;
