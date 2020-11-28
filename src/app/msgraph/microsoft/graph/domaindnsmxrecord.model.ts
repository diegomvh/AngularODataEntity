import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DomainDnsRecordModel } from './domaindnsrecord.model';
import { DomainDnsMxRecord } from './domaindnsmxrecord.entity';
import { DomainDnsMxRecordCollection } from './domaindnsmxrecord.collection';
//#endregion

export class DomainDnsMxRecordModel<E extends DomainDnsMxRecord> extends DomainDnsRecordModel<E> {
  //#region ODataApi Properties
  mailExchange: string;
  preference?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}