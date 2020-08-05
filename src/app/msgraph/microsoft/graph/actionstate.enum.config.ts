import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ActionState } from './actionstate.enum';
//#endregion

export const ActionStateConfig = {
  name: "ActionState",
  members: ActionState
} as EnumConfig<ActionState>;