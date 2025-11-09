import { Router } from 'express';

import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

const router = Router();
const itemsController = new ItemsController(new ItemsService());

router.get('/get_description', itemsController.getMany.bind(itemsController));
router.post('/add_item', itemsController.create.bind(itemsController));

export default router;
