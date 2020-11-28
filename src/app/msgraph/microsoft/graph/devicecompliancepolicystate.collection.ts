import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ComplianceStatus } from './compliancestatus.enum';
import { PolicyPlatformType } from './policyplatformtype.enum';
import { DeviceCompliancePolicySettingState } from './devicecompliancepolicysettingstate.complex';
import { DeviceCompliancePolicyState } from './devicecompliancepolicystate.entity';
import { DeviceCompliancePolicySettingStateModel } from './devicecompliancepolicysettingstate.model';
import { DeviceCompliancePolicyStateModel } from './devicecompliancepolicystate.model';
import { DeviceCompliancePolicySettingStateCollection } from './devicecompliancepolicysettingstate.collection';
//#endregion

export class DeviceCompliancePolicyStateCollection<E extends DeviceCompliancePolicyState, M extends DeviceCompliancePolicyStateModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}