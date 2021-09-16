import { Router } from 'express';
import userRouter from '@modules/users/routes/UserRoutes';
import taskRouter from '@modules/tasks/routes/TaskRouter';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/task', taskRouter);

export default routes;
