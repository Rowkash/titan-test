import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { AppDataSource } from '../database/orm.config';

export interface IItem {
  title: string;
  description: string;
  count?: number;
}

export class ItemsService {
  itemsRepository: Repository<Item>;
  constructor() {
    this.itemsRepository = AppDataSource.getRepository(Item);
  }

  async getMany() {
    return await this.itemsRepository.find();
  }

  create(data: IItem) {
    return this.itemsRepository.save(data);
  }
}
