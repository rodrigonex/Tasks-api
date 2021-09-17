import { Request, Response } from 'express';
import CreateService from '../service/CreateService';
import DeleteService from '../service/DeleteService';
import ListServise from '../service/ListService';
import ShowService from '../service/ShowService';
import UpdateService from '../service/UpdateService';

export default class UserController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const createService = new CreateService();
    const user = await createService.execute({ name, email, password });

    return response.json(user);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listService = new ListServise();
    const users = await listService.execute();

    return response.json(users);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showService = new ShowService();

    const user = await showService.execute(id);

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, name, email, password } = request.body;

    const updateService = new UpdateService();

    const user = await updateService.execute({ id, name, email, password });

    return response.json(user);
  }

  public async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const deleteService = new DeleteService();

    await deleteService.execute(id);

    response.end();
  }
}
