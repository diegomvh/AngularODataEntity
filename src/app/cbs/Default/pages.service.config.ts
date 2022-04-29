//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PagesService } from './pages.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const PagesServiceEntitySetConfig = {
  name: 'Pages',
  entityType: 'CBS.Website.ODataApi.Models.Page',
  service: PagesService
} as EntitySetConfig;
//#endregion