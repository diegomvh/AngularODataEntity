import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DomainState } from './domainstate.complex';
import { DirectoryObject } from './directoryobject.entity';
import { Domain } from './domain.entity';
import { DomainDnsRecord } from './domaindnsrecord.entity';
import { DomainStateModel } from './domainstate.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { DomainDnsRecordModel } from './domaindnsrecord.model';
import { DomainStateCollection } from './domainstate.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { DomainCollection } from './domain.collection';
import { DomainDnsRecordCollection } from './domaindnsrecord.collection';
//#endregion

export class DomainModel<E extends Domain> extends EntityModel<E> {
  //#region ODataApi Properties
  authenticationType: string;
  availabilityStatus?: string;
  isAdminManaged: boolean;
  isDefault: boolean;
  isInitial: boolean;
  isRoot: boolean;
  isVerified: boolean;
  manufacturer?: string;
  model?: string;
  passwordNotificationWindowInDays?: number;
  passwordValidityPeriodInDays?: number;
  state?: DomainStateModel<DomainState>;
  supportedServices: string[];
  domainNameReferences?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  serviceConfigurationRecords?: DomainDnsRecordCollection<DomainDnsRecord, DomainDnsRecordModel<DomainDnsRecord>>;
  verificationDnsRecords?: DomainDnsRecordCollection<DomainDnsRecord, DomainDnsRecordModel<DomainDnsRecord>>;
  //#endregion
  //#region ODataApi Actions
  public forceDelete(disableUserAccounts: boolean, options?: HttpOptions): Observable<any> {
    var res = this._action<{disableUserAccounts: boolean}, any>('microsoft.graph.forceDelete');
    res.segment.entitySet('domains');
    return res.call({disableUserAccounts}, 'property', options) as Observable<any>;
  }
  public verify(options?: HttpOptions): Observable<DomainModel<Domain>> {
    var res = this._action<null, Domain>('microsoft.graph.verify');
    res.segment.entitySet('domains');
    return res.call(null, 'model', options) as Observable<DomainModel<Domain>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}