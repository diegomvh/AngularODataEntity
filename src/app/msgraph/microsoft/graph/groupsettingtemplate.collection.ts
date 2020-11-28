import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { SettingTemplateValue } from './settingtemplatevalue.complex';
import { GroupSettingTemplate } from './groupsettingtemplate.entity';
import { SettingTemplateValueModel } from './settingtemplatevalue.model';
import { GroupSettingTemplateModel } from './groupsettingtemplate.model';
import { SettingTemplateValueCollection } from './settingtemplatevalue.collection';
//#endregion

export class GroupSettingTemplateCollection<E extends GroupSettingTemplate, M extends GroupSettingTemplateModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}