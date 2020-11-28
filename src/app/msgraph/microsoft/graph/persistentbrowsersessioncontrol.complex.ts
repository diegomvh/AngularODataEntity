import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessSessionControl } from './conditionalaccesssessioncontrol.complex';
import { PersistentBrowserSessionMode } from './persistentbrowsersessionmode.enum';
import { ConditionalAccessSessionControlModel } from './conditionalaccesssessioncontrol.model';
import { ConditionalAccessSessionControlCollection } from './conditionalaccesssessioncontrol.collection';
//#endregion

export interface PersistentBrowserSessionControl extends ConditionalAccessSessionControl {
  //#region ODataApi Properties
  mode?: PersistentBrowserSessionMode;
  //#endregion
}