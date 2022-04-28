import { existsSync, readFileSync } from 'fs';
import MarkdownIt from 'markdown-it';

export const MarkdownHandler = {
  fileExists: (path: string) => {
    return existsSync(path);
  },
  convertToHtml: (path: string) => {
    return new MarkdownIt().render(readFileSync(path, 'utf-8'));
  },
};
