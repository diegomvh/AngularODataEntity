import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { VppTokenState } from './vpptokenstate.enum';
//#endregion

export const VppTokenStateConfig = {
  name: "VppTokenState",
  members: VppTokenState
} as EnumConfig<VppTokenState>;