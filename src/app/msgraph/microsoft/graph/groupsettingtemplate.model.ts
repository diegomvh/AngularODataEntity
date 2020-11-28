import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
import { SettingTemplateValue } from './settingtemplatevalue.complex';
import { GroupSettingTemplate } from './groupsettingtemplate.entity';
import { SettingTemplateValueModel } from './settingtemplatevalue.model';
import { SettingTemplateValueCollection } from './settingtemplatevalue.collection';
import { GroupSettingTemplateCollection } from './groupsettingtemplate.collection';
//#endregion

export class GroupSettingTemplateModel<E extends GroupSettingTemplate> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  values: SettingTemplateValueCollection<SettingTemplateValue, SettingTemplateValueModel<SettingTemplateValue>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}