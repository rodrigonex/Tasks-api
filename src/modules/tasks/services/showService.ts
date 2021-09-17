import connectMongo from '@shared/mongodb/mogodb';
import ITask from '../interface/TaskInterface';
import TaskModel from '../model/TaskModel';

export default class ShowService {
  public async execute(id: string): Promise<ITask[]> {
    connectMongo();

    const tasks = await TaskModel.find({ idAutor: id });

    return tasks;
  }
}
