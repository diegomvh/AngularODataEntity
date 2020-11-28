import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AuditEntry } from './auditentry.entity';
import { AuditEntryProperty } from './auditentryproperty.entity';
import { AuditEntryModel } from './auditentry.model';
import { AuditEntryPropertyModel } from './auditentryproperty.model';
import { AuditEntryCollection } from './auditentry.collection';
//#endregion

export class AuditEntryPropertyCollection<E extends AuditEntryProperty, M extends AuditEntryPropertyModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}