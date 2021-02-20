import { Router } from 'express';
import controllers from './item.controllers';

const router = Router();

route.router // /api/item
  .route('/')
  .get(controllers.getOne)
  .post(controllers.createOne);

// /api/item/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);

export default router;
