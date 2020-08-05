import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { VppTokenState } from './vpptokenstate.enum';
//#endregion

export const VppTokenStateConfig = {
  name: "vppTokenState",
  members: VppTokenState
} as EnumConfig<VppTokenState>;