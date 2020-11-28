import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DomainDnsRecordModel } from './domaindnsrecord.model';
import { DomainDnsUnavailableRecord } from './domaindnsunavailablerecord.entity';
import { DomainDnsUnavailableRecordCollection } from './domaindnsunavailablerecord.collection';
//#endregion

export class DomainDnsUnavailableRecordModel<E extends DomainDnsUnavailableRecord> extends DomainDnsRecordModel<E> {
  //#region ODataApi Properties
  description?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}