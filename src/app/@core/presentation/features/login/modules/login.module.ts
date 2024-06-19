import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from '@/app/@core/presentation/features/login/login.component';
import { UserLoginUseCase } from '@/app/@core/domain/usecases/user-login.usecase';
import { ServicesModule } from '@/app/@core/modules/services.modules';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  providers: [UserLoginUseCase],
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ServicesModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
})
export class LoginModule {}
