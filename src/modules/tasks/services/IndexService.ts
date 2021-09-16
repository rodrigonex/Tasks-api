import connectMongo from '@shared/mongodb/mogodb';
import ITask from '../interface/TaskInterface';
import TaskModel from '../model/TaskModel';

export default class IndexService {
  public async execute(): Promise<ITask[]> {
    connectMongo();

    const tasks = await TaskModel.find({});
    return tasks;
  }
}
