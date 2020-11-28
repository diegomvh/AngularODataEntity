import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ActionState } from './actionstate.enum';
//#endregion

export const ActionStateConfig = {
  name: "actionState",
  members: ActionState
} as EnumTypeConfig<ActionState>;