import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OmaSetting } from './omasetting.entity';
//#endregion

export interface OmaSettingDateTime extends OmaSetting {
  //#region ODataApi Properties
  value: Date;
  //#endregion
}