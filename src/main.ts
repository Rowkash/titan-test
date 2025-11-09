import 'dotenv/config';
import express from 'express';

import ItemsRoute from './items/router';
import { AppDataSource } from './database/orm.config';
import { ExceptionFilter } from './common/errors/exception.filter';

async function bootstrap() {
  await AppDataSource.initialize();
  const app = express();
  const PORT = process.env.PORT;

  app.use(express.json());
  app.use('/api', ItemsRoute);

  app.use(new ExceptionFilter().catch.bind(ExceptionFilter));
  app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
}

void bootstrap();
