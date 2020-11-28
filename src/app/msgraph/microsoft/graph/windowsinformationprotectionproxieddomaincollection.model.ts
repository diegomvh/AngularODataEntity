import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ProxiedDomain } from './proxieddomain.complex';
import { WindowsInformationProtectionProxiedDomainCollection } from './windowsinformationprotectionproxieddomaincollection.complex';
import { ProxiedDomainModel } from './proxieddomain.model';
import { ProxiedDomainCollection } from './proxieddomain.collection';
import { WindowsInformationProtectionProxiedDomainCollectionCollection } from './windowsinformationprotectionproxieddomaincollection.collection';
//#endregion

export class WindowsInformationProtectionProxiedDomainCollectionModel<E extends WindowsInformationProtectionProxiedDomainCollection> extends ODataModel<E> {
  //#region ODataApi Properties
  displayName: string;
  proxiedDomains: ProxiedDomainCollection<ProxiedDomain, ProxiedDomainModel<ProxiedDomain>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}