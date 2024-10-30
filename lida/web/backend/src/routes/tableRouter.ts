import Express from 'express';
import { TableController } from '../controllers/tableController';

export const tableRouter = Express.Router();

const tableController = new TableController();

tableRouter.get(
  '/:tableName/last-upadateAt',
  tableController.getLastUpdateAtByTableName.controller
);
