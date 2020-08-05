import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OmaSetting } from './omasetting.entity';
//#endregion

export interface OmaSettingString extends OmaSetting {
  //#region ODataApi Properties
  value: string;
  //#endregion
}