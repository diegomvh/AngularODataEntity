import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AuditEntryState } from './auditentrystate.enum';
import { AuditEntry } from './auditentry.entity';
import { AuditEntryProperty } from './auditentryproperty.entity';
import { AuditEntryModel } from './auditentry.model';
import { AuditEntryPropertyModel } from './auditentryproperty.model';
import { AuditEntryPropertyCollection } from './auditentryproperty.collection';
//#endregion

export class AuditEntryCollection<E extends AuditEntry, M extends AuditEntryModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}