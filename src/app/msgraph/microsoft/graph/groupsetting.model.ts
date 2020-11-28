import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { SettingValue } from './settingvalue.entity';
import { GroupSetting } from './groupsetting.entity';
import { SettingValueModel } from './settingvalue.model';
import { SettingValueCollection } from './settingvalue.collection';
import { GroupSettingCollection } from './groupsetting.collection';
//#endregion

export class GroupSettingModel<E extends GroupSetting> extends EntityModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  templateId?: string;
  values: SettingValueCollection<SettingValue, SettingValueModel<SettingValue>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}