import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AppIdentity } from './appidentity.complex';
import { AuditActivityInitiator } from './auditactivityinitiator.complex';
import { UserIdentity } from './useridentity.complex';
import { AppIdentityModel } from './appidentity.model';
import { UserIdentityModel } from './useridentity.model';
import { AppIdentityCollection } from './appidentity.collection';
import { AuditActivityInitiatorCollection } from './auditactivityinitiator.collection';
import { UserIdentityCollection } from './useridentity.collection';
//#endregion

export class AuditActivityInitiatorModel<E extends AuditActivityInitiator> extends ODataModel<E> {
  //#region ODataApi Properties
  app?: AppIdentityModel<AppIdentity>;
  user?: UserIdentityModel<UserIdentity>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}