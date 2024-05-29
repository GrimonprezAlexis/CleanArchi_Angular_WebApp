import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@/presentation/features/home/home.component';
import { AuthGuard } from '@/app/@core/auth/auth.guard';
import { LoginComponent } from '@/presentation/features/login/login.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('@/presentation/features/login/modules/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('@/presentation/features/user/modules/user.module').then(
        (m) => m.UsersModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'account',
    loadChildren: () =>
      import('@/presentation/features/account/modules/account.module').then(
        (m) => m.AccountModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
