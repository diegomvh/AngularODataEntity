import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AppliedConditionalAccessPolicyResult } from './appliedconditionalaccesspolicyresult.enum';
import { AppliedConditionalAccessPolicy } from './appliedconditionalaccesspolicy.complex';
import { AppliedConditionalAccessPolicyModel } from './appliedconditionalaccesspolicy.model';
//#endregion

export class AppliedConditionalAccessPolicyCollection<E extends AppliedConditionalAccessPolicy, M extends AppliedConditionalAccessPolicyModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}