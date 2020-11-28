import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DomainDnsRecordCollection } from './domaindnsrecord.collection';
import { DomainDnsTxtRecord } from './domaindnstxtrecord.entity';
import { DomainDnsTxtRecordModel } from './domaindnstxtrecord.model';
//#endregion

export class DomainDnsTxtRecordCollection<E extends DomainDnsTxtRecord, M extends DomainDnsTxtRecordModel<E>> extends DomainDnsRecordCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}