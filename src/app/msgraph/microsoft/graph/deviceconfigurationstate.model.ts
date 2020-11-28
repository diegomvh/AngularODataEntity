import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ComplianceStatus } from './compliancestatus.enum';
import { PolicyPlatformType } from './policyplatformtype.enum';
import { DeviceConfigurationSettingState } from './deviceconfigurationsettingstate.entity';
import { DeviceConfigurationState } from './deviceconfigurationstate.entity';
import { DeviceConfigurationSettingStateModel } from './deviceconfigurationsettingstate.model';
import { DeviceConfigurationSettingStateCollection } from './deviceconfigurationsettingstate.collection';
import { DeviceConfigurationStateCollection } from './deviceconfigurationstate.collection';
//#endregion

export class DeviceConfigurationStateModel<E extends DeviceConfigurationState> extends EntityModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  platformType: PolicyPlatformType;
  settingCount: number;
  settingStates?: DeviceConfigurationSettingStateCollection<DeviceConfigurationSettingState, DeviceConfigurationSettingStateModel<DeviceConfigurationSettingState>>;
  state: ComplianceStatus;
  version: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}