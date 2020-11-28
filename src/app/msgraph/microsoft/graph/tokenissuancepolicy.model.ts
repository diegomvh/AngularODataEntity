import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { StsPolicyModel } from './stspolicy.model';
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
import { TokenIssuancePolicyCollection } from './tokenissuancepolicy.collection';
//#endregion

export class TokenIssuancePolicyModel<E extends TokenIssuancePolicy> extends StsPolicyModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}