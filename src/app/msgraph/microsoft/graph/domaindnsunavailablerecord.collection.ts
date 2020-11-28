import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DomainDnsRecordCollection } from './domaindnsrecord.collection';
import { DomainDnsUnavailableRecord } from './domaindnsunavailablerecord.entity';
import { DomainDnsUnavailableRecordModel } from './domaindnsunavailablerecord.model';
//#endregion

export class DomainDnsUnavailableRecordCollection<E extends DomainDnsUnavailableRecord, M extends DomainDnsUnavailableRecordModel<E>> extends DomainDnsRecordCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}