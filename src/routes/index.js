import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../views/home.vue';
import NewCompany from '../views/newCompany.vue';
import EmployeesView from '../views/employeesView.vue';
import EmployeesCreate from '../views/employeesCreate.vue';
import Login from '../views/login.vue';

const routes = [
  { path: '/auth/login', name: 'login', component: Login },
  { path: '/', component: Home, meta: { requiresAuth: true } },
  { path: '/companies/create', component: NewCompany, meta: { requiresAuth: true } },
  { path: '/companies/:id/employees', name: 'employees', component: EmployeesView, props: true, meta: { requiresAuth: true } },
  { path: '/companies/:id/employees/create', name: 'create', component: EmployeesCreate, props: true, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  // Se a rota requer autenticação e o usuário não está autenticado
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    console.log('Redirecionando para a página de login');
    next({ name: 'login' });
  } else {
    // Prossiga para a próxima rota
    next();
  }
});

export default router;