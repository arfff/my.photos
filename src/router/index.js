import Vue from 'vue';
import Router from 'vue-router';
import 'babel-polyfill';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/views/Home';
import Photos from '@/views/Photos';
import Album from '@/views/Album';
import Videos from '@/views/Videos';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos,
    },
    {
      path: '/videos',
      name: 'Videos',
      component: Videos,
    },
    {
      path: '/album/:id',
      name: 'Album',
      component: Album,
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
