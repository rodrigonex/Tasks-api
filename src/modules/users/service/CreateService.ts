import AppError from '@shared/errors/AppError';
import connectionDb from '@shared/mongodb/mogodb';
import { hash } from 'bcrypt';
import IUsers from '../interface/UserInterface';
import UserModel from '../model/userModel';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export default class CreateService {
  public async execute({
    name,
    email,
    password,
  }: IRequest): Promise<IUsers | undefined> {
    connectionDb();
    const emailExist = await UserModel.find({ email: email });

    if (emailExist == undefined) {
      throw new AppError('E-mail already registered');
    }

    const hashedPassword = await hash(password, 8);
    const user = new UserModel({ name, email, password: hashedPassword });
    await user.save();
    return user;
  }
}
