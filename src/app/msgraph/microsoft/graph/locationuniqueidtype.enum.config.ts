import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { LocationUniqueIdType } from './locationuniqueidtype.enum';
//#endregion

export const LocationUniqueIdTypeConfig = {
  name: "LocationUniqueIdType",
  members: LocationUniqueIdType
} as EnumConfig<LocationUniqueIdType>;