import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginUseCase } from '@/app/@core/domain/usecases/user-login.usecase';
import { UserRepository } from '@/app/@core/domain/repositories/user.repository';
import { UserImplementationRepository } from '@/app/@core/data/repositories/user/user-implementation.repository';
import { MockUserRepository } from '@/app/@core/domain/repositories/mock-user.repository';

@NgModule({
  imports: [CommonModule],
  providers: [
    UserLoginUseCase,
    { provide: UserRepository, useClass: MockUserRepository },
  ],
})
export class ServicesModule {}
