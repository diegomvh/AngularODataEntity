import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { UserIdentity } from './useridentity.entity';
import { AppIdentity } from './appidentity.entity';
//#endregion

export interface AuditActivityInitiator {
  //#region ODataApi Properties
  user?: UserIdentity;
  app?: AppIdentity;
  //#endregion
}