import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OmaSetting } from './omasetting.entity';
import { OmaSettingModel } from './omasetting.model';
import { OmaSettingCollection } from './omasetting.collection';
//#endregion

export interface OmaSettingBoolean extends OmaSetting {
  //#region ODataApi Properties
  value: boolean;
  //#endregion
}