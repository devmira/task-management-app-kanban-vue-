import { createRouter, createWebHistory } from "vue-router"
//import BoardPage from '../views/BoardPage'



  const routes = [
    { path: '/', name: "BoardPage", component: () => import('../views/BoardPage.vue') },
    { path: '/form', name: "TaskForm", component: () => import('../views/TaskForm.vue') },
    // { path: '/tasks/:id', name: "TaskForm", component: TaskForm },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
  
export default router