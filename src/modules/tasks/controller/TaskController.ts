import { Request, Response } from 'express';
import CreateService from '../services/CreateService';
import IndexService from '../services/IndexService';

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
}
