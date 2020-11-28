import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OmaSetting } from './omasetting.entity';
import { OmaSettingModel } from './omasetting.model';
import { OmaSettingCollection } from './omasetting.collection';
//#endregion

export interface OmaSettingStringXml extends OmaSetting {
  //#region ODataApi Properties
  fileName?: string;
  value: ArrayBuffer;
  //#endregion
}