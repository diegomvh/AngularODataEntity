import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DomainDnsRecordModel } from './domaindnsrecord.model';
import { DomainDnsCnameRecord } from './domaindnscnamerecord.entity';
import { DomainDnsCnameRecordCollection } from './domaindnscnamerecord.collection';
//#endregion

export class DomainDnsCnameRecordModel<E extends DomainDnsCnameRecord> extends DomainDnsRecordModel<E> {
  //#region ODataApi Properties
  canonicalName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}