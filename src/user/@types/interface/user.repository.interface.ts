import { UserEntity } from '../../../model/entity/user.entity';
import { BaseInterfaceRepository } from '../../../model/repository/base/base.interface.repository';

export type UserRepositoryInterface = BaseInterfaceRepository<UserEntity>;
