import { Observable } from 'rxjs';
import { UseCase } from '@/domain/base/use-case';
import { UserModel } from '@/domain/models/user.model';
import { UserRepository } from '@/domain/repositories/user.repository';
import { Injectable } from '@angular/core';

@Injectable()
export class GetUserProfileUseCase implements UseCase<void, UserModel> {
  constructor(private _userRepository: UserRepository) {}
  execute(): Observable<UserModel> {
    return this._userRepository.getUserProfile();
  }
}
