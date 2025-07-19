import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Dashboard } from './dashboard/dashboard/dashboard';
import { Projects } from './projects/projects/projects';
import { Tasks } from './task/tasks/tasks';
import { AuthGuard } from './auth/authguard';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [AuthGuard],
  },
  {
    path: 'projects',
    component: Projects,
    canActivate: [AuthGuard],
  },
  {
    path: 'tasks',
    component: Tasks,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
