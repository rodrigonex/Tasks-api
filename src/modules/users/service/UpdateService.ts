import AppError from '@shared/errors/AppError';
import connectionDb from '@shared/mongodb/mogodb';
import IUsers from '../interface/UserInterface';
import StudentModel from '../model/userModel';
import mongoose from 'mongoose';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default class UpdateService {
  public async execute({
    id,
    name,
    email,
    password,
  }: IRequest): Promise<IUsers> {
    connectionDb();

    const userExists = await StudentModel.findById(id);

    if (!userExists) {
      throw new AppError('User not found.');
    }

    const newUser = {
      id,
      name,
      email,
      password,
      lastModified: userExists.lastModified,
    };
    mongoose.set('returnOriginal', false);

    const user = await StudentModel.findByIdAndUpdate(id, newUser);

    return user;
  }
}
