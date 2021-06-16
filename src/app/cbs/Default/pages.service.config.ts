//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PagesService } from './pages.service';
//#endregion

//#region ODataApi EntitySetConfig
export const PagesServiceEntitySetConfig = {
  name: "Pages",
  entityType: "CBS.Website.ODataApi.Models.Page",
  service: PagesService
} as EntitySetConfig;
//#endregion