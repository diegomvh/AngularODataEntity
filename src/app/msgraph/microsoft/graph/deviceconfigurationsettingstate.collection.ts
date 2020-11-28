import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ComplianceStatus } from './compliancestatus.enum';
import { SettingSource } from './settingsource.entity';
import { DeviceConfigurationSettingState } from './deviceconfigurationsettingstate.entity';
import { SettingSourceModel } from './settingsource.model';
import { DeviceConfigurationSettingStateModel } from './deviceconfigurationsettingstate.model';
import { SettingSourceCollection } from './settingsource.collection';
//#endregion

export class DeviceConfigurationSettingStateCollection<E extends DeviceConfigurationSettingState, M extends DeviceConfigurationSettingStateModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}