import {
  createWebHashHistory,
  createRouter,
} from 'vue-router'
import { Hello } from './Hello.vue'
import { Posts } from './Posts.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/hello',
      component: Hello,
    },
    {
      path: '/posts',
      component: Posts,
    },

  ],
})

export { router }
