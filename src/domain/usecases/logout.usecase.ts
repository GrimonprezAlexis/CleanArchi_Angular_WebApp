import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRepository } from '@/domain/repositories/user.repository';
import { Router } from '@angular/router';

@Injectable()
export class LogoutUseCase {
  constructor(
    private _userRepository: UserRepository,
    private _router: Router
  ) {}

  execute(): Observable<void> {
    localStorage.removeItem('authToken'); //Todo
    this._router.navigate(['/login']);

    return this._userRepository.logout();
  }
}
