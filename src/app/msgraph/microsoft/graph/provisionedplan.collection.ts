import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ProvisionedPlan } from './provisionedplan.complex';
import { ProvisionedPlanModel } from './provisionedplan.model';
//#endregion

export class ProvisionedPlanCollection<E extends ProvisionedPlan, M extends ProvisionedPlanModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}