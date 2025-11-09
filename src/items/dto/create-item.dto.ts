import * as zod from 'zod';

export const createItemSchema = zod.object({
  title: zod.string('title field is required').min(2).max(255),
  description: zod.string('description field is required').min(5),
  count: zod.number().min(0).optional().default(0),
});
