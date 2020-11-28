import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ServicePlanInfo } from './serviceplaninfo.complex';
import { ServicePlanInfoCollection } from './serviceplaninfo.collection';
//#endregion

export class ServicePlanInfoModel<E extends ServicePlanInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  appliesTo?: string;
  provisioningStatus?: string;
  servicePlanId?: string;
  servicePlanName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}