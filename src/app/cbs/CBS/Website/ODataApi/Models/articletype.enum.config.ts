//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ArticleType } from './articletype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ArticleTypeConfig = {
  name: 'ArticleType',
  members: ArticleType,
  fields: {
    Any: {value: 0},
    Article: {value: 1},
    Background: {value: 2},
    Custom: {value: 3},
    News: {value: 4},
    Publication: {value: 5},
    Visualisation: {value: 6},
    Corporate: {value: 7},
    Unknown: {value: -1}
  }
} as EnumTypeConfig<ArticleType>;
//#endregion