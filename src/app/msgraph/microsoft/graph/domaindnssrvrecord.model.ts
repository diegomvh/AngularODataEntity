import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DomainDnsRecordModel } from './domaindnsrecord.model';
import { DomainDnsSrvRecord } from './domaindnssrvrecord.entity';
import { DomainDnsSrvRecordCollection } from './domaindnssrvrecord.collection';
//#endregion

export class DomainDnsSrvRecordModel<E extends DomainDnsSrvRecord> extends DomainDnsRecordModel<E> {
  //#region ODataApi Properties
  nameTarget?: string;
  port?: number;
  priority?: number;
  protocol?: string;
  service?: string;
  weight?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}