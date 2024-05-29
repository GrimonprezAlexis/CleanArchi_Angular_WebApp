import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@/app/components/home/home.component';
import { AuthGuard } from '@/app/@core/auth/auth.guard';
import { LoginComponent } from '@/app/components/login/login.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('@/app/modules/login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'users',
    loadChildren: () =>
      import('@/app/modules/user/user.module').then((m) => m.UsersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'account',
    loadChildren: () =>
      import('@/app/modules/account/account.module').then(
        (m) => m.AccountModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
