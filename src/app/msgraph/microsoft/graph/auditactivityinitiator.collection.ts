import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AppIdentity } from './appidentity.entity';
import { AuditActivityInitiator } from './auditactivityinitiator.entity';
import { UserIdentity } from './useridentity.entity';
import { AppIdentityModel } from './appidentity.model';
import { AuditActivityInitiatorModel } from './auditactivityinitiator.model';
import { UserIdentityModel } from './useridentity.model';
import { AppIdentityCollection } from './appidentity.collection';
import { UserIdentityCollection } from './useridentity.collection';
//#endregion

export class AuditActivityInitiatorCollection<E extends AuditActivityInitiator, M extends AuditActivityInitiatorModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}