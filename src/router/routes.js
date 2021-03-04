export default [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    children:[
      {
        path: '/',
        name:'Home',
        component: () => import('@/views/Home/Index.vue')
      },
      {
        path: '/posts',
        name: 'Posts',
        component: () => import('@/views/Home/Posts.vue')
      },
      {
        path: '/post/:id',
        name: 'Post/:id',
        component: () => import('@/views/Home/Post.vue')
      },
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404.vue')
  }
  
]