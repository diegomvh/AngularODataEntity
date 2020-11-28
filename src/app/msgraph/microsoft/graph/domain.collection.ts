import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DomainState } from './domainstate.complex';
import { DirectoryObject } from './directoryobject.entity';
import { Domain } from './domain.entity';
import { DomainDnsRecord } from './domaindnsrecord.entity';
import { DomainStateModel } from './domainstate.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { DomainModel } from './domain.model';
import { DomainDnsRecordModel } from './domaindnsrecord.model';
import { DomainStateCollection } from './domainstate.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { DomainDnsRecordCollection } from './domaindnsrecord.collection';
//#endregion

export class DomainCollection<E extends Domain, M extends DomainModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}