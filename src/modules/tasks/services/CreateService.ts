import UserModel from '@modules/users/model/userModel';
import connectMongo from '@shared/mongodb/mogodb';
import ITask from '../interface/TaskInterface';
import TaskModel from '../model/TaskModel';
import AppError from '@shared/errors/AppError';

interface IRequest {
  header: string;
  content: string;
  idAutor: string;
}

export default class CreateService {
  public async execute({ header, content, idAutor }: IRequest): Promise<ITask> {
    connectMongo();

    const idAutorExists = await UserModel.findById(idAutor);
    if (!idAutorExists) {
      throw new AppError('IdAutor not found.');
    }

    const task = new TaskModel({
      header,
      content,
      idAutor,
    });

    await task.save();
    return task;
  }
}
