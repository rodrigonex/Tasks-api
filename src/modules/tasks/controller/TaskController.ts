import { Request, Response } from 'express';
import CreateService from '../services/CreateService';
import DeleteService from '../services/DeleteService';
import IndexService from '../services/IndexService';
import ShowService from '../services/showService';

export default class TaskController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { header, content, idAutor } = request.body;
    const createService = new CreateService();

    const task = await createService.execute({
      header,
      content,
      idAutor,
    });

    return response.json(task);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexService = new IndexService();
    const tasks = await indexService.execute();

    return response.json(tasks);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showService = new ShowService();

    const tasks = await showService.execute(id);

    return response.json(tasks);
  }

  public async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const deleteService = new DeleteService();

    await deleteService.execute(id);

    response.end();
  }
}
