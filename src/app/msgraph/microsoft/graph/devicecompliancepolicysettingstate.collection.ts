import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ComplianceStatus } from './compliancestatus.enum';
import { DeviceCompliancePolicySettingState } from './devicecompliancepolicysettingstate.entity';
import { SettingSource } from './settingsource.entity';
import { DeviceCompliancePolicySettingStateModel } from './devicecompliancepolicysettingstate.model';
import { SettingSourceModel } from './settingsource.model';
import { SettingSourceCollection } from './settingsource.collection';
//#endregion

export class DeviceCompliancePolicySettingStateCollection<E extends DeviceCompliancePolicySettingState, M extends DeviceCompliancePolicySettingStateModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}