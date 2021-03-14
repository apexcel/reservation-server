import { Router, NextFunction, Request, Response }from 'express';
import * as adminController from './admin.controller';
const router = Router();

router.get('/get', (req: Request, res: Response, next: NextFunction) => {
});

export default router;