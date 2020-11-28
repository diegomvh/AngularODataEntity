import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { SettingTemplateValue } from './settingtemplatevalue.entity';
import { SettingTemplateValueModel } from './settingtemplatevalue.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { SettingTemplateValueCollection } from './settingtemplatevalue.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
//#endregion

export interface GroupSettingTemplate extends DirectoryObject {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  values: SettingTemplateValue[];
  //#endregion
}