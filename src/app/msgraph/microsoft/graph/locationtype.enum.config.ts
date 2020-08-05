import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { LocationType } from './locationtype.enum';
//#endregion

export const LocationTypeConfig = {
  name: "locationType",
  members: LocationType
} as EnumConfig<LocationType>;