import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DomainDnsRecordCollection } from './domaindnsrecord.collection';
import { DomainDnsCnameRecord } from './domaindnscnamerecord.entity';
import { DomainDnsCnameRecordModel } from './domaindnscnamerecord.model';
//#endregion

export class DomainDnsCnameRecordCollection<E extends DomainDnsCnameRecord, M extends DomainDnsCnameRecordModel<E>> extends DomainDnsRecordCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}