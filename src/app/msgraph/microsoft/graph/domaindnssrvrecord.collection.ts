import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DomainDnsRecordCollection } from './domaindnsrecord.collection';
import { DomainDnsSrvRecord } from './domaindnssrvrecord.entity';
import { DomainDnsSrvRecordModel } from './domaindnssrvrecord.model';
//#endregion

export class DomainDnsSrvRecordCollection<E extends DomainDnsSrvRecord, M extends DomainDnsSrvRecordModel<E>> extends DomainDnsRecordCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}