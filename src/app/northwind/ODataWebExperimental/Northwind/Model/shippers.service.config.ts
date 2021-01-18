import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { ShippersService } from './shippers.service';
//#endregion

//#region ODataApi EntitySetConfig
export const ShippersServiceEntitySetConfig = {
  name: "Shippers",
  entityType: "NorthwindModel.Shipper",
  service: ShippersService,
  annotations: []
} as EntitySetConfig;
//#endregion