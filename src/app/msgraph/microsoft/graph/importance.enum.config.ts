import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Importance } from './importance.enum';
//#endregion

export const ImportanceConfig = {
  name: "importance",
  members: Importance
} as EnumTypeConfig<Importance>;