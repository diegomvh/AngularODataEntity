import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ProxiedDomain } from './proxieddomain.entity';
import { WindowsInformationProtectionProxiedDomainCollection } from './windowsinformationprotectionproxieddomaincollection.entity';
import { ProxiedDomainModel } from './proxieddomain.model';
import { WindowsInformationProtectionProxiedDomainCollectionModel } from './windowsinformationprotectionproxieddomaincollection.model';
import { ProxiedDomainCollection } from './proxieddomain.collection';
//#endregion

export class WindowsInformationProtectionProxiedDomainCollectionCollection<E extends WindowsInformationProtectionProxiedDomainCollection, M extends WindowsInformationProtectionProxiedDomainCollectionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}