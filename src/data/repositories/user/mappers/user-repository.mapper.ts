import { Mapper } from 'src/base/mapper';
import { UserModel } from 'src/domain/models/user.model';
import { UserEntity } from '../entities/user-entity';

export class UserImplementationRepositoryMapper extends Mapper<
  UserEntity,
  UserModel
> {
  mapFrom(param: UserEntity): UserModel {
    return {
      id: param.id,
      fullName: param.name,
      username: param.userName,
      phoneNum: param.phoneNumber,
      profilePicture: param.userPicture,
      activationStatus: param.activationStatus,
    };
  }
  mapTo(param: UserModel): UserEntity {
    return {
      id: param.id,
      name: param.fullName,
      userName: param.username,
      phoneNumber: param.phoneNum,
      userPicture: param.profilePicture,
      activationStatus: param.activationStatus,
    };
  }
}
