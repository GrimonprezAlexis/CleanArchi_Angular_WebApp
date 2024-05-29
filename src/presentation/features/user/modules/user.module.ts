import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from '@/presentation/features/user/user-list/user-list.component';
import { UserDetailComponent } from '@/presentation/features/user/user-detail/user-detail.component';

import { GetUserProfileUseCase } from '@/domain/usecases/get-user-profile.usecase';
import { UserRepository } from '@/domain/repositories/user.repository';
import { MockUserRepository } from '@/domain/repositories/mock-user.repository';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: ':id', component: UserDetailComponent },
];

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [
    GetUserProfileUseCase,
    { provide: UserRepository, useClass: MockUserRepository },
  ],
})
export class UsersModule {}
