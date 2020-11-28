import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { StsPolicyCollection } from './stspolicy.collection';
import { HomeRealmDiscoveryPolicy } from './homerealmdiscoverypolicy.entity';
import { HomeRealmDiscoveryPolicyModel } from './homerealmdiscoverypolicy.model';
//#endregion

export class HomeRealmDiscoveryPolicyCollection<E extends HomeRealmDiscoveryPolicy, M extends HomeRealmDiscoveryPolicyModel<E>> extends StsPolicyCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}