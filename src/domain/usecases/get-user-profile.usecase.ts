import { Observable } from 'rxjs';
import { UseCase } from '@/domain/base/use-case';
import { UserModel } from '@/domain/models/user.model';
import { UserRepository } from '@/domain/repositories/user.repository';

export class GetUserProfileUseCase implements UseCase<void, UserModel> {
  constructor(private userRepository: UserRepository) {}
  execute(): Observable<UserModel> {
    return this.userRepository.getUserProfile();
  }
}
