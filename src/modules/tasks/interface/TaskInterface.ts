import { ObjectId } from 'mongoose';

export default interface ITask {
  header: string;
  content: string;
  idAutor: string;
  lastModified?: Date;
  _id: ObjectId;
}
