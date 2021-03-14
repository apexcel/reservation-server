import { Request, Response, NextFunction } from 'express';
import { Document } from 'mongoose';
import { disconnection, connection } from '../../database';
import User from '../../mongoose/user';

export const tempFunction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log('insert');
    try {
        await User.create({
            id: 'id3',
            name: 'tester'
        })
    }
    catch {
        res.json({
            error: '-100'
        });
    }
};

export const dbTest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        connection();
        await User.find({}, (err: any, result: Document<any, unknown>[]) => {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
        disconnection();
    }
    catch {
        res.json({
            error: '-100'
        });
    }
};