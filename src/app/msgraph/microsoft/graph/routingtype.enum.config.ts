import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RoutingType } from './routingtype.enum';
//#endregion

export const RoutingTypeConfig = {
  name: "RoutingType",
  members: RoutingType
} as EnumConfig<RoutingType>;