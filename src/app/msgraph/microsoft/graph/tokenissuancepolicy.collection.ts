import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { StsPolicyCollection } from './stspolicy.collection';
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
import { TokenIssuancePolicyModel } from './tokenissuancepolicy.model';
//#endregion

export class TokenIssuancePolicyCollection<E extends TokenIssuancePolicy, M extends TokenIssuancePolicyModel<E>> extends StsPolicyCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}