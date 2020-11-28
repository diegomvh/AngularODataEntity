import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { StsPolicyModel } from './stspolicy.model';
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
import { TokenLifetimePolicyCollection } from './tokenlifetimepolicy.collection';
//#endregion

export class TokenLifetimePolicyModel<E extends TokenLifetimePolicy> extends StsPolicyModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}