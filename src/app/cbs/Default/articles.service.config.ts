﻿//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { ArticlesService } from './articles.service';
//#endregion

//#region ODataApi EntitySetConfig
export const ArticlesServiceEntitySetConfig = {
  name: "Articles",
  entityType: "CBS.Website.ODataApi.Models.Article",
  service: ArticlesService
} as EntitySetConfig;
//#endregion