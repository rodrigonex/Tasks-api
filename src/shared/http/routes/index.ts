import { Router } from 'express';
import userRouter from '@modules/users/routes/UserRoutes';
import taskRouter from '@modules/tasks/routes/TaskRouter';
import sessionsRouter from '@modules/users/routes/SessionRoutes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/task', taskRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
