import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import TaskController from '../controller/TaskController';

const taskRouter = Router();
const taskControler = new TaskController();

taskRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      header: Joi.string().required(),
      content: Joi.string().required(),
      idAutor: Joi.string().required(),
    },
  }),
  taskControler.store,
);

taskRouter.get('/', taskControler.index);

taskRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  taskControler.show,
);

taskRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  taskControler.delete,
);
export default taskRouter;
