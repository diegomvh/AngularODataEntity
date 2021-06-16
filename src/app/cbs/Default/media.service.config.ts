//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { MediaService } from './media.service';
//#endregion

//#region ODataApi EntitySetConfig
export const MediaServiceEntitySetConfig = {
  name: "Media",
  entityType: "CBS.Website.ODataApi.Models.Medium",
  service: MediaService
} as EntitySetConfig;
//#endregion