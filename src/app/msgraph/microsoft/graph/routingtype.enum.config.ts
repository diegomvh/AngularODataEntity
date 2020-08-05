import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RoutingType } from './routingtype.enum';
//#endregion

export const RoutingTypeConfig = {
  name: "routingType",
  members: RoutingType
} as EnumConfig<RoutingType>;