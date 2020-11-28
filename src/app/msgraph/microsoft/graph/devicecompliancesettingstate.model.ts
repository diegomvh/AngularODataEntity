import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ComplianceStatus } from './compliancestatus.enum';
import { DeviceComplianceSettingState } from './devicecompliancesettingstate.entity';
import { DeviceComplianceSettingStateCollection } from './devicecompliancesettingstate.collection';
//#endregion

export class DeviceComplianceSettingStateModel<E extends DeviceComplianceSettingState> extends EntityModel<E> {
  //#region ODataApi Properties
  complianceGracePeriodExpirationDateTime: Date;
  deviceId?: string;
  deviceModel?: string;
  deviceName?: string;
  setting?: string;
  settingName?: string;
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