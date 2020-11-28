import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ManagedAppFlaggedReason } from './managedappflaggedreason.enum';
import { MobileAppIdentifier } from './mobileappidentifier.entity';
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { ManagedAppOperation } from './managedappoperation.entity';
import { MobileAppIdentifierModel } from './mobileappidentifier.model';
import { EntityModel } from './entity.model';
import { ManagedAppPolicyModel } from './managedapppolicy.model';
import { ManagedAppOperationModel } from './managedappoperation.model';
import { MobileAppIdentifierCollection } from './mobileappidentifier.collection';
import { EntityCollection } from './entity.collection';
import { ManagedAppPolicyCollection } from './managedapppolicy.collection';
import { ManagedAppOperationCollection } from './managedappoperation.collection';
//#endregion

export interface ManagedAppRegistration extends Entity {
  //#region ODataApi Properties
  appIdentifier?: MobileAppIdentifier;
  applicationVersion?: string;
  createdDateTime: Date;
  deviceName?: string;
  deviceTag?: string;
  deviceType?: string;
  flaggedReasons: ManagedAppFlaggedReason;
  lastSyncDateTime: Date;
  managementSdkVersion?: string;
  platformVersion?: string;
  userId?: string;
  version?: string;
  appliedPolicies?: ManagedAppPolicy[];
  intendedPolicies?: ManagedAppPolicy[];
  operations?: ManagedAppOperation[];
  //#endregion
}