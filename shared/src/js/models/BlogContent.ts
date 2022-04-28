import { Languages } from '../enums/languages';

export interface BlogContent {
  name: string;
  lang: Languages;
  html: string;
}
