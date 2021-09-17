import connectMongo from '@shared/mongodb/mogodb';
import TaskModel from '../model/TaskModel';

export default class DeleteService {
  public async execute(id: string): Promise<void> {
    connectMongo();

    await TaskModel.findByIdAndDelete(id);
  }
}
