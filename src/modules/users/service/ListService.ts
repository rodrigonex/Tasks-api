import connectionDb from '@shared/mongodb/mogodb';
import IUSers from '../interface/UserInterface';
import UserModel from '../model/userModel';

export default class ListServise {
  public async execute(): Promise<IUSers[]> {
    connectionDb();

    const users = await UserModel.find({});
    return users;
  }
}
