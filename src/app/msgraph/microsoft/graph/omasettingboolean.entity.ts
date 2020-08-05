import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OmaSetting } from './omasetting.entity';
//#endregion

export interface OmaSettingBoolean extends OmaSetting {
  //#region ODataApi Properties
  value: boolean;
  //#endregion
}