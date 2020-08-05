import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OmaSetting } from './omasetting.entity';
//#endregion

export interface OmaSettingFloatingPoint extends OmaSetting {
  //#region ODataApi Properties
  value: number;
  //#endregion
}