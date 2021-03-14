import { Router, NextFunction, Request, Response }from 'express';
import * as userController from './users.controller';
const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    userController.tempFunction(req, res, next);
});

router.get('/list', (req: Request, res: Response, next: NextFunction) => {
    userController.dbTest(req, res, next);
});

export default router;