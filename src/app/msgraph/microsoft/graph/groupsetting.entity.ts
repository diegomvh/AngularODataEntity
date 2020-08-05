import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { SettingValue } from './settingvalue.entity';
//#endregion

export interface GroupSetting extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  templateId?: string;
  values: SettingValue[];
  //#endregion
}