import AppError from '@shared/errors/AppError';
import connectionDb from '@shared/mongodb/mogodb';
import IUsers from '../interface/UserInterface';
import StudentModel from '../model/userModel';

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
    const emailExist = await StudentModel.find({ email: email });

    if (emailExist == undefined) {
      throw new AppError('E-mail already registered');
    }

    const user = new StudentModel({ name, email, password });
    await user.save();
    return user;
  }
}
