import express, { Request, Response } from 'express';
import { MarkdownHandler } from '../markdownHandler';

export const initMarkdownRoutes = (app: express.Application) => {
  app.route('/markdown/:lang/pages/:name').get(getPage);
  app.route('/markdown/:lang/blogs/:name').get(getBlog);
};

const getPage = (req: Request, res: Response) => {
  const { lang, name } = req.params;
  const filePath = `build/markdown/${lang}/pages/${name}.md`;
  if (MarkdownHandler.fileExists(filePath)) {
    res.send({ name, lang, html: MarkdownHandler.convertToHtml(filePath) });
  } else {
    res.status(404).end();
  }
};

const getBlog = (req: Request, res: Response) => {
  const { lang, name } = req.params;
  const filePath = `build/markdown/${lang}/blogs/${name}.md`;
  if (MarkdownHandler.fileExists(filePath)) {
    res.send({ name, lang, html: MarkdownHandler.convertToHtml(filePath) });
  } else {
    res.status(404).end();
  }
};
