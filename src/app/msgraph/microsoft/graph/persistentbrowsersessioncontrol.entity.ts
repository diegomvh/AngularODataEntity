import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessSessionControl } from './conditionalaccesssessioncontrol.entity';
import { PersistentBrowserSessionMode } from './persistentbrowsersessionmode.enum';
//#endregion

export interface PersistentBrowserSessionControl extends ConditionalAccessSessionControl {
  //#region ODataApi Properties
  mode?: PersistentBrowserSessionMode;
  //#endregion
}