import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DomainDnsRecordCollection } from './domaindnsrecord.collection';
import { DomainDnsMxRecord } from './domaindnsmxrecord.entity';
import { DomainDnsMxRecordModel } from './domaindnsmxrecord.model';
//#endregion

export class DomainDnsMxRecordCollection<E extends DomainDnsMxRecord, M extends DomainDnsMxRecordModel<E>> extends DomainDnsRecordCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}