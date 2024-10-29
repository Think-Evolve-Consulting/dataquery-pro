import Express from 'express';
import { GrmController } from '../controllers/grmController';

export const grnRouter = Express.Router();

const grmController = new GrmController();

grnRouter.post('/', grmController.uploadGrmFile.controller);
