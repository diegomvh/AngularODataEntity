import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { SettingValue } from './settingvalue.complex';
import { GroupSetting } from './groupsetting.entity';
import { SettingValueModel } from './settingvalue.model';
import { GroupSettingModel } from './groupsetting.model';
import { SettingValueCollection } from './settingvalue.collection';
//#endregion

export class GroupSettingCollection<E extends GroupSetting, M extends GroupSettingModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}