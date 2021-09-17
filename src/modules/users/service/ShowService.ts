import AppError from '@shared/errors/AppError';
import connectionDb from '@shared/mongodb/mogodb';
import IUsers from '../interface/UserInterface';
import UserModel from '../model/userModel';

export default class ShowService {
  public async execute(id: string): Promise<IUsers | null> {
    connectionDb();

    const user = await UserModel.findById(id);

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}
