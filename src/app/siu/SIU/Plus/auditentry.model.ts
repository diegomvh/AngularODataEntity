import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AuditEntryState } from './auditentrystate.enum';
import { AuditEntry } from './auditentry.entity';
import { AuditEntryProperty } from './auditentryproperty.entity';
import { AuditEntryPropertyModel } from './auditentryproperty.model';
import { AuditEntryCollection } from './auditentry.collection';
import { AuditEntryPropertyCollection } from './auditentryproperty.collection';
//#endregion

export class AuditEntryModel<E extends AuditEntry> extends ODataModel<E> {
  //#region ODataApi Properties
  auditEntryID: number;
  createdBy?: string;
  createdDate: Date;
  entitySetName?: string;
  entityTypeName?: string;
  state: AuditEntryState;
  stateName?: string;
  properties?: AuditEntryPropertyCollection<AuditEntryProperty, AuditEntryPropertyModel<AuditEntryProperty>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}