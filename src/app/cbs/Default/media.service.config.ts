//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaService } from './media.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const MediaServiceEntitySetConfig = {
  name: 'Media',
  entityType: 'CBS.Website.ODataApi.Models.Medium',
  service: MediaService
} as EntitySetConfig;
//#endregion