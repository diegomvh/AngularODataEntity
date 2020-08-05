import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OmaSetting } from './omasetting.entity';
//#endregion

export interface OmaSettingBase64 extends OmaSetting {
  //#region ODataApi Properties
  fileName?: string;
  value: string;
  //#endregion
}