import { Observable } from 'rxjs';
import { UseCase } from '@/app/@core/domain/base/use-case';
import { UserModel } from '@/app/@core/domain/models/user.model';
import { UserRepository } from '@/app/@core/domain/repositories/user.repository';
import { Injectable } from '@angular/core';

@Injectable()
export class UserLoginUseCase
  implements UseCase<{ username: string; password: string }, UserModel>
{
  constructor(private _userRepository: UserRepository) {}
  execute(params: {
    username: string;
    password: string;
  }): Observable<UserModel> {
    return this._userRepository.login(params);
  }
}
