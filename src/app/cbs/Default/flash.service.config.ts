import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { FlashService } from './flash.service';
//#endregion

//#region ODataApi EntitySetConfig
export const FlashConfig = {
  name: "Flash",
  entityType: "CBS.Website.ODataApi.Models.Flash",
  service: FlashService,
  annotations: []
} as EntitySetConfig;
//#endregion