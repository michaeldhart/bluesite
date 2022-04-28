import express, { Request, Response } from 'express';
import { readFileSync } from 'fs';

export const initConfigRoutes = (app: express.Application) => {
  app.route('/config').get(get);
};

const get = (req: Request, res: Response) => {
  res.send(readFileSync('appConfig.json', 'utf-8'));
};
