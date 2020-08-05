import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChangeType } from './changetype.enum';
//#endregion

export const ChangeTypeConfig = {
  name: "ChangeType",
  members: ChangeType
} as EnumConfig<ChangeType>;