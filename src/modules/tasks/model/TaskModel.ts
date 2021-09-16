import { Schema, model } from 'mongoose';

interface ITask {
  header: string;
  content: string;
  idAutor: string;
  lastModified?: Date;
}

const schema = new Schema<ITask>({
  header: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  idAutor: {
    type: String,
    required: true,
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});

const TaskModel = model<ITask>('tasks', schema);

export default TaskModel;
