import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ComplianceStatus } from './compliancestatus.enum';
import { DeviceCompliancePolicySettingState } from './devicecompliancepolicysettingstate.entity';
import { SettingSource } from './settingsource.entity';
import { SettingSourceModel } from './settingsource.model';
import { DeviceCompliancePolicySettingStateCollection } from './devicecompliancepolicysettingstate.collection';
import { SettingSourceCollection } from './settingsource.collection';
//#endregion

export class DeviceCompliancePolicySettingStateModel<E extends DeviceCompliancePolicySettingState> extends ODataModel<E> {
  //#region ODataApi Properties
  currentValue?: string;
  errorCode: number;
  errorDescription?: string;
  instanceDisplayName?: string;
  setting?: string;
  settingName?: string;
  sources?: SettingSourceCollection<SettingSource, SettingSourceModel<SettingSource>>;
  state: ComplianceStatus;
  userEmail?: string;
  userId?: string;
  userName?: string;
  userPrincipalName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}