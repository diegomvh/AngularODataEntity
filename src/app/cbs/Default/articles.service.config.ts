import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { ArticlesService } from './articles.service';
//#endregion

//#region ODataApi EntitySetConfig
export const ArticlesConfig = {
  name: "Articles",
  entityType: "CBS.Website.ODataApi.Models.Article",
  service: ArticlesService,
  annotations: []
} as EntitySetConfig;
//#endregion