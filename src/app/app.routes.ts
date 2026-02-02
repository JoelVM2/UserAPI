import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Users } from './pages/users/users';
import { UserDetail } from './pages/user-detail/user-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: '/users', component: Users },
  { path: '/create/:id', component: UserDetail },
];
