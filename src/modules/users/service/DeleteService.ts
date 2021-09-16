import AppError from '@shared/errors/AppError';
import connectionDb from '@shared/mongodb/mogodb';
import StudentModel from '../model/userModel';

export default class DeleteService {
  public async execute(id: string): Promise<void> {
    connectionDb();

    const userExists = await StudentModel.findById(id);

    if (!userExists) {
      throw new AppError('User not found.');
    }

    await StudentModel.findByIdAndDelete(id);
  }
}
