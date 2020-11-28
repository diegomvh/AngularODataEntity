import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AuditEntry } from './auditentry.entity';
import { AuditEntryProperty } from './auditentryproperty.entity';
import { AuditEntryModel } from './auditentry.model';
import { AuditEntryCollection } from './auditentry.collection';
import { AuditEntryPropertyCollection } from './auditentryproperty.collection';
//#endregion

export class AuditEntryPropertyModel<E extends AuditEntryProperty> extends ODataModel<E> {
  //#region ODataApi Properties
  auditEntryPropertyID: number;
  auditEntryID?: number;
  propertyName?: string;
  relationName?: string;
  newValueFormatted?: string;
  oldValueFormatted?: string;
  parent?: AuditEntryModel<AuditEntry>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}