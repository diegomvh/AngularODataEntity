import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DirectoryAudit } from './directoryaudit.entity';
import { SignIn } from './signin.entity';
import { RestrictedSignIn } from './restrictedsignin.entity';
import { EntityModel } from './entity.model';
import { DirectoryAuditModel } from './directoryaudit.model';
import { SignInModel } from './signin.model';
import { RestrictedSignInModel } from './restrictedsignin.model';
import { EntityCollection } from './entity.collection';
import { DirectoryAuditCollection } from './directoryaudit.collection';
import { SignInCollection } from './signin.collection';
import { RestrictedSignInCollection } from './restrictedsignin.collection';
//#endregion

export interface AuditLogRoot extends Entity {
  //#region ODataApi Properties
  directoryAudits?: DirectoryAudit[];
  restrictedSignIns?: RestrictedSignIn[];
  signIns?: SignIn[];
  //#endregion
}