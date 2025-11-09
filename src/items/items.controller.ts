import { NextFunction, Request, Response } from 'express';

import {ItemsService} from "./items.service";
import { createItemSchema } from './dto/create-item.dto';

export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  async getMany(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await this.itemsService.getMany();
      return res.status(200).json(items);
    } catch (error) {
      console.error(error.message);
      return res
        .status(500)
        .json('Oops, something went wrong. errorPlease try again ');
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { success, error, data } = createItemSchema.safeParse(req.body);
      if (!success) return next(error);
      const item = await this.itemsService.create(data);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error.message);
      return res
        .status(500)
        .json('Oops, something went wrong. errorPlease try again ');
    }
  }
}
