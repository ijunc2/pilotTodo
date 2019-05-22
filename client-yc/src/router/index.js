import Vue from 'vue';
import VueRouter from 'vue-router'
import Login from '../views/Login';
import Todo from '../views/Todo';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Login,
    },
    {
      path: '/todo',
      component: Todo,
    },
  ]
});

export default router;
