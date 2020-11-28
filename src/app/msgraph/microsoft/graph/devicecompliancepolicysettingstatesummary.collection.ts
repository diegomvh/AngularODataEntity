import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { PolicyPlatformType } from './policyplatformtype.enum';
import { DeviceCompliancePolicySettingStateSummary } from './devicecompliancepolicysettingstatesummary.entity';
import { DeviceComplianceSettingState } from './devicecompliancesettingstate.entity';
import { DeviceCompliancePolicySettingStateSummaryModel } from './devicecompliancepolicysettingstatesummary.model';
import { DeviceComplianceSettingStateModel } from './devicecompliancesettingstate.model';
import { DeviceComplianceSettingStateCollection } from './devicecompliancesettingstate.collection';
//#endregion

export class DeviceCompliancePolicySettingStateSummaryCollection<E extends DeviceCompliancePolicySettingStateSummary, M extends DeviceCompliancePolicySettingStateSummaryModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}