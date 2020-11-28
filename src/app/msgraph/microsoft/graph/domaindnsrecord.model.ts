import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DomainDnsRecord } from './domaindnsrecord.entity';
import { DomainDnsRecordCollection } from './domaindnsrecord.collection';
//#endregion

export class DomainDnsRecordModel<E extends DomainDnsRecord> extends EntityModel<E> {
  //#region ODataApi Properties
  isOptional: boolean;
  label: string;
  recordType?: string;
  supportedService: string;
  ttl: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}