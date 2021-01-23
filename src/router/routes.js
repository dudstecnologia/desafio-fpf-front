export default [
  {
    path: '/',
    name: 'lista',
    component: () => import('../pages/Lista')
  },
  {
    path: '/cadastro/:id?',
    name: 'cadastro',
    component: () => import('../pages/Cadastro')
  },
  {
    path: '*',
    component: () => import('../pages/Erro404.vue')
  }
]
