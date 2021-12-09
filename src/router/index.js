import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/Gallery.vue'), //eslint-disable-line
  },
  {
    path: '/discography',
    name: 'Discography',
    component: () => import(/* webpackChunkName: "discography" */ '../views/Discography.vue'),
  },
  {
    path: '/sheets',
    name: 'Sheets',
    component: () => import(/* webpackChunkName: "sheets" */ '../views/Sheets.vue'),
  },
  {
    path: '/papers-and-books',
    name: 'Papers',
    component: () => import(/* webpackChunkName: "papers" */ '../views/Papers.vue'),
  },
  {
    path: '/next-dates',
    name: 'NextDates',
    component: () => import(/* webpackChunkName: "next-dates" */ '../views/NextDates.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
