//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ArticlesService } from './articles.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const ArticlesServiceEntitySetConfig = {
  name: "Articles",
  entityType: "CBS.Website.ODataApi.Models.Article",
  service: ArticlesService
} as EntitySetConfig;
//#endregion