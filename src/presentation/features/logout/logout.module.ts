import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from '@/presentation/features/logout/logout.component';

import { LogoutUseCase } from '@/domain/usecases/logout.usecase';
import { UserRepository } from '@/domain/repositories/user.repository';
import { MockUserRepository } from '@/domain/repositories/mock-user.repository';

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
