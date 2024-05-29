import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '@/app/components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginUseCase } from '@/domain/usecases/user-login.usecase';
import { ServicesModule } from '../services.modules';
import { HttpClientModule } from '@angular/common/http';

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
