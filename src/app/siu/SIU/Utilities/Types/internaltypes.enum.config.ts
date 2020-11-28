import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { InternalTypes } from './internaltypes.enum';
//#endregion

export const InternalTypesConfig = {
  name: "InternalTypes",
  members: InternalTypes
} as EnumConfig<InternalTypes>;