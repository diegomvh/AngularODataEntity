import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { VppTokenState } from './vpptokenstate.enum';
//#endregion

export const VppTokenStateConfig = {
  name: "vppTokenState",
  members: VppTokenState
} as EnumTypeConfig<VppTokenState>;