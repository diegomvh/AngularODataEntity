import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ProvisionedPlan } from './provisionedplan.complex';
import { ProvisionedPlanCollection } from './provisionedplan.collection';
//#endregion

export class ProvisionedPlanModel<E extends ProvisionedPlan> extends ODataModel<E> {
  //#region ODataApi Properties
  capabilityStatus?: string;
  provisioningStatus?: string;
  service?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}