import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { AuditLogRoot } from './auditlogroot.entity';
import { DirectoryAudit } from './directoryaudit.entity';
import { SignIn } from './signin.entity';
import { RestrictedSignIn } from './restrictedsignin.entity';
import { DirectoryAuditModel } from './directoryaudit.model';
import { SignInModel } from './signin.model';
import { RestrictedSignInModel } from './restrictedsignin.model';
import { AuditLogRootCollection } from './auditlogroot.collection';
import { DirectoryAuditCollection } from './directoryaudit.collection';
import { SignInCollection } from './signin.collection';
import { RestrictedSignInCollection } from './restrictedsignin.collection';
//#endregion

export class AuditLogRootModel<E extends AuditLogRoot> extends EntityModel<E> {
  //#region ODataApi Properties
  directoryAudits?: DirectoryAuditCollection<DirectoryAudit, DirectoryAuditModel<DirectoryAudit>>;
  restrictedSignIns?: RestrictedSignInCollection<RestrictedSignIn, RestrictedSignInModel<RestrictedSignIn>>;
  signIns?: SignInCollection<SignIn, SignInModel<SignIn>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}