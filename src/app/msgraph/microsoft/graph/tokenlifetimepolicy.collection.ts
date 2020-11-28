import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { StsPolicyCollection } from './stspolicy.collection';
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
import { TokenLifetimePolicyModel } from './tokenlifetimepolicy.model';
//#endregion

export class TokenLifetimePolicyCollection<E extends TokenLifetimePolicy, M extends TokenLifetimePolicyModel<E>> extends StsPolicyCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}