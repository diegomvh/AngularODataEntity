import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ComplianceStatus } from './compliancestatus.enum';
import { DeviceComplianceSettingState } from './devicecompliancesettingstate.entity';
import { DeviceComplianceSettingStateModel } from './devicecompliancesettingstate.model';
//#endregion

export class DeviceComplianceSettingStateCollection<E extends DeviceComplianceSettingState, M extends DeviceComplianceSettingStateModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}