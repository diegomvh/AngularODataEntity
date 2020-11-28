import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ProxiedDomain } from './proxieddomain.entity';
import { ProxiedDomainCollection } from './proxieddomain.collection';
//#endregion

export class ProxiedDomainModel<E extends ProxiedDomain> extends ODataModel<E> {
  //#region ODataApi Properties
  ipAddressOrFQDN: string;
  proxy?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}