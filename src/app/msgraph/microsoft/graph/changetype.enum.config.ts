import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChangeType } from './changetype.enum';
//#endregion

export const ChangeTypeConfig = {
  name: "changeType",
  members: ChangeType
} as EnumTypeConfig<ChangeType>;