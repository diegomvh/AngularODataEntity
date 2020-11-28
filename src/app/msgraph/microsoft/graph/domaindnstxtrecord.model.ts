import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DomainDnsRecordModel } from './domaindnsrecord.model';
import { DomainDnsTxtRecord } from './domaindnstxtrecord.entity';
import { DomainDnsTxtRecordCollection } from './domaindnstxtrecord.collection';
//#endregion

export class DomainDnsTxtRecordModel<E extends DomainDnsTxtRecord> extends DomainDnsRecordModel<E> {
  //#region ODataApi Properties
  text: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}