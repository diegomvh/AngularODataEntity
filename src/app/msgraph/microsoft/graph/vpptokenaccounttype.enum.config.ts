import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { VppTokenAccountType } from './vpptokenaccounttype.enum';
//#endregion

export const VppTokenAccountTypeConfig = {
  name: "vppTokenAccountType",
  members: VppTokenAccountType
} as EnumTypeConfig<VppTokenAccountType>;