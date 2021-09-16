import { Schema, model } from 'mongoose';

interface IUSer {
  name: string;
  email: string;
  password: string;
  lastModified?: Date;
}

const schema = new Schema<IUSer>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});

const UserModel = model<IUSer>('users', schema);

export default UserModel;
