import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginUseCase } from 'src/domain/usecases/user-login.usecase';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserImplementationRepository } from 'src/data/repositories/user/user-implementation.repository';
import { MockUserRepository } from '@/domain/repositories/mock-user.repository';

@NgModule({
  imports: [CommonModule],
  providers: [
    UserLoginUseCase,
    { provide: UserRepository, useClass: MockUserRepository },
  ],
})
export class ServicesModule {}
