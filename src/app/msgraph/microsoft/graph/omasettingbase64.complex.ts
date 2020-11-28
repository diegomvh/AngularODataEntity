import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OmaSetting } from './omasetting.complex';
import { OmaSettingModel } from './omasetting.model';
import { OmaSettingCollection } from './omasetting.collection';
//#endregion

export interface OmaSettingBase64 extends OmaSetting {
  //#region ODataApi Properties
  fileName?: string;
  value: string;
  //#endregion
}