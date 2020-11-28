import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ProxiedDomain } from './proxieddomain.complex';
import { ProxiedDomainModel } from './proxieddomain.model';
//#endregion

export class ProxiedDomainCollection<E extends ProxiedDomain, M extends ProxiedDomainModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}