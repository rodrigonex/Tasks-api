import { ObjectId } from 'mongoose';

export default interface IUSers {
  name: string;
  email: string;
  password: string;
  lastModified?: Date;
  _id: ObjectId;
}
