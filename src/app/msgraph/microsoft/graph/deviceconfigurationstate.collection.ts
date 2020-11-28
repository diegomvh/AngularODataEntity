import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ComplianceStatus } from './compliancestatus.enum';
import { PolicyPlatformType } from './policyplatformtype.enum';
import { DeviceConfigurationSettingState } from './deviceconfigurationsettingstate.entity';
import { DeviceConfigurationState } from './deviceconfigurationstate.entity';
import { DeviceConfigurationSettingStateModel } from './deviceconfigurationsettingstate.model';
import { DeviceConfigurationStateModel } from './deviceconfigurationstate.model';
import { DeviceConfigurationSettingStateCollection } from './deviceconfigurationsettingstate.collection';
//#endregion

export class DeviceConfigurationStateCollection<E extends DeviceConfigurationState, M extends DeviceConfigurationStateModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}