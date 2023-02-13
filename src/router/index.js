import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import 'bootstrap/dist/css/bootstrap.css'

const routes = [
  {
    path: '/',
    redirect: '/news'
    // name: 'home',
    // component: HomeView
  },
  {
    path: '/news',
    name: 'NewsView',
    component: () =>
      import(
        /* webpackChunkName: "news", webpackPrefetch:true */ '../views/NewsView.vue'
      )
  },
  {
    path: '/ask',
    name: 'AskView',
    component: () =>
      import(
        /* webpackChunkName: "news", webpackPrefetch:true */ '../views/AskView.vue'
      )
  },
  {
    path: '/jobs',
    name: 'JobsView',
    component: () =>
      import(
        /* webpackChunkName: "news", webpackPrefetch:true */ '../views/JobsView.vue'
      )
  },
  {
    path: '/user',
    name: 'UserView',
    component: () =>
      import(
        /* webpackChunkName: "news", webpackPrefetch:true */ '../views/UserView.vue'
      )
  },
  {
    path: '/item',
    name: 'ItemView',
    component: () =>
      import(
        /* webpackChunkName: "news", webpackPrefetch:true */ '../views/ItemView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
