import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OmaSetting } from './omasetting.entity';
//#endregion

export interface OmaSettingStringXml extends OmaSetting {
  //#region ODataApi Properties
  fileName?: string;
  value: ArrayBuffer;
  //#endregion
}