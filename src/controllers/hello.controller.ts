import { BadRequestError } from '@errors/api.error';
import { HelloService } from '@services/hello.service';
import { Request, Response, Router } from 'express';

import { objectIsEmpty } from '@utils/index.util';

export class HelloController {
  helloService: HelloService;

  constructor(private router: Router) {
    this.helloService = new HelloService();
  }

  private find = async (req: Request, res: Response): Promise<void> => {
    const result = await this.helloService.find();
    res.status(200).json(result);
  };

  private findOne = async (req: Request, res: Response): Promise<void> => {
    const result = await this.helloService.findOne(req.params.id);
    res.status(200).json(result);
  };

  private create = async (req: Request, res: Response): Promise<void> => {
    if (!req.body || objectIsEmpty(req.body))
      throw new BadRequestError('Requisição inválida');
    const result = await this.helloService.create(req.body);
    res.status(201).json(result);
  };

  private update = async (req: Request, res: Response): Promise<void> => {
    if (!req.body || objectIsEmpty(req.body))
      throw new BadRequestError('Requisição inválida');
    const result = await this.helloService.update(req.params.id, req.body);
    res.status(200).json(result);
  };

  private delete = async (req: Request, res: Response): Promise<void> => {
    const result = await this.helloService.delete(req.params.id);
    res.status(200).json(result);
  };

  public getRoutes(): Router {
    this.router.get('/', this.find);
    this.router.get('/:id', this.findOne);
    this.router.post('/', this.create);
    this.router.patch('/:id', this.update);
    this.router.delete('/:id', this.delete);
    return this.router;
  }
}
