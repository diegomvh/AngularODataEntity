import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { LocationUniqueIdType } from './locationuniqueidtype.enum';
//#endregion

export const LocationUniqueIdTypeConfig = {
  name: "locationUniqueIdType",
  members: LocationUniqueIdType
} as EnumTypeConfig<LocationUniqueIdType>;