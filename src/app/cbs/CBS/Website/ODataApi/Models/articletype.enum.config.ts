import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ArticleType } from './articletype.enum';
//#endregion

export const ArticleTypeConfig = {
  name: "ArticleType",
  members: ArticleType
} as EnumConfig<ArticleType>;