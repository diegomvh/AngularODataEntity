import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { PhoneType } from './phonetype.enum';
//#endregion

export const PhoneTypeConfig = {
  name: "PhoneType",
  members: PhoneType
} as EnumConfig<PhoneType>;