import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { SettingTemplateValue } from './settingtemplatevalue.entity';
//#endregion

export interface GroupSettingTemplate extends DirectoryObject {
  //#region ODataApi Properties
  displayName?: string;
  description?: string;
  values: SettingTemplateValue[];
  //#endregion
}