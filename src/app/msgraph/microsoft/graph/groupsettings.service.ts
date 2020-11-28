import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { SettingValue } from './settingvalue.entity';
import { GroupSetting } from './groupsetting.entity';
import { SettingValueModel } from './settingvalue.model';
import { GroupSettingModel } from './groupsetting.model';
import { SettingValueCollection } from './settingvalue.collection';
import { GroupSettingCollection } from './groupsetting.collection';
//#endregion

@Injectable()
export class GroupSettingsService extends ODataEntityService<GroupSetting> {
  constructor(protected client: ODataClient) {
    super(client, 'groupSettings', 'microsoft.graph.groupSetting');
  }

  //#region ODataApi Model
  groupSettingModel(): GroupSettingModel<GroupSetting> {
    return super.model() as GroupSettingModel<GroupSetting>;
  }
  //#endregion
  //#region ODataApi Collection
  groupSettingCollection(): GroupSettingCollection<GroupSetting, GroupSettingModel<GroupSetting>> {
    return super.collection() as GroupSettingCollection<GroupSetting, GroupSettingModel<GroupSetting>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
