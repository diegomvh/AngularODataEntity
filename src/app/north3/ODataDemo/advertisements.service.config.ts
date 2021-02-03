import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { AdvertisementsService } from './advertisements.service';
//#endregion

//#region ODataApi EntitySetConfig
export const AdvertisementsServiceEntitySetConfig = {
  name: "Advertisements",
  entityType: "ODataDemo.Advertisement",
  service: AdvertisementsService,
  annotations: []
} as EntitySetConfig;
//#endregion