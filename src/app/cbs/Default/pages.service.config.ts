import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { PagesService } from './pages.service';
//#endregion

//#region ODataApi EntitySetConfig
export const PagesConfig = {
  name: "Pages",
  entityType: "CBS.Website.ODataApi.Models.Page",
  service: PagesService,
  annotations: []
} as EntitySetConfig;
//#endregion