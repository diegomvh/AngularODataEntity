//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AdvertisementsService } from './advertisements.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const AdvertisementsServiceEntitySetConfig = {
  name: 'Advertisements',
  entityType: 'ODataDemo.Advertisement',
  service: AdvertisementsService
} as EntitySetConfig;
//#endregion