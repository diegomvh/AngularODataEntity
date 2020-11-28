import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { SettingValue } from './settingvalue.complex';
import { SettingValueModel } from './settingvalue.model';
import { EntityModel } from './entity.model';
import { SettingValueCollection } from './settingvalue.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface GroupSetting extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  templateId?: string;
  values: SettingValue[];
  //#endregion
}