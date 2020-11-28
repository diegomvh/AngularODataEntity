import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { StsPolicyModel } from './stspolicy.model';
import { ClaimsMappingPolicy } from './claimsmappingpolicy.entity';
import { ClaimsMappingPolicyCollection } from './claimsmappingpolicy.collection';
//#endregion

export class ClaimsMappingPolicyModel<E extends ClaimsMappingPolicy> extends StsPolicyModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}