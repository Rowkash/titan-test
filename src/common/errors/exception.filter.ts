import { ZodError } from 'zod';
import { HttpError } from './http-error.class';
import { NextFunction, Request, Response } from 'express';

export class ExceptionFilter {
  catch(
    error: Error | HttpError,
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    if (error instanceof ZodError) {
      return res.status(400).json(error.flatten().fieldErrors);
    }
    if (error instanceof HttpError) {
      res.status(error.statusCode).send({ error: error.message });
    } else {
      res.status(500).send({ error: 'Internal Server Error' });
    }
  }
}
