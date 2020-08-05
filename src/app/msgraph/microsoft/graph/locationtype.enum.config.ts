import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { LocationType } from './locationtype.enum';
//#endregion

export const LocationTypeConfig = {
  name: "LocationType",
  members: LocationType
} as EnumConfig<LocationType>;