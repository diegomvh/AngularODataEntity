import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { AuditLogRoot } from './auditlogroot.entity';
import { DirectoryAudit } from './directoryaudit.entity';
import { SignIn } from './signin.entity';
import { RestrictedSignIn } from './restrictedsignin.entity';
import { AuditLogRootModel } from './auditlogroot.model';
import { DirectoryAuditModel } from './directoryaudit.model';
import { SignInModel } from './signin.model';
import { RestrictedSignInModel } from './restrictedsignin.model';
import { DirectoryAuditCollection } from './directoryaudit.collection';
import { SignInCollection } from './signin.collection';
import { RestrictedSignInCollection } from './restrictedsignin.collection';
//#endregion

export class AuditLogRootCollection<E extends AuditLogRoot, M extends AuditLogRootModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}