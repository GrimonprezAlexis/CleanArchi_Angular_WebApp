import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from '@/app/@core/presentation/features/logout/logout.component';

import { LogoutUseCase } from '@/app/@core/domain/usecases/logout.usecase';
import { UserRepository } from '@/app/@core/domain/repositories/user.repository';
import { MockUserRepository } from '@/app/@core/domain/repositories/mock-user.repository';

@NgModule({
  imports: [CommonModule],
  exports: [LogoutComponent],
  declarations: [LogoutComponent],
  providers: [
    LogoutUseCase,
    { provide: UserRepository, useClass: MockUserRepository },
  ],
})
export class LogoutModule {}
