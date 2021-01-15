import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaService } from './media.service';
//#endregion

//#region ODataApi EntitySetConfig
export const MediaConfig = {
  name: "Media",
  entityType: "CBS.Website.ODataApi.Models.Medium",
  service: MediaService,
  annotations: []
} as EntitySetConfig;
//#endregion