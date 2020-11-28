import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AppIdentity } from './appidentity.entity';
import { UserIdentity } from './useridentity.entity';
import { AppIdentityModel } from './appidentity.model';
import { UserIdentityModel } from './useridentity.model';
import { AppIdentityCollection } from './appidentity.collection';
import { UserIdentityCollection } from './useridentity.collection';
//#endregion

export interface AuditActivityInitiator {
  //#region ODataApi Properties
  app?: AppIdentity;
  user?: UserIdentity;
  //#endregion
}