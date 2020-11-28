import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ManagedAppFlaggedReason } from './managedappflaggedreason.enum';
import { MobileAppIdentifier } from './mobileappidentifier.entity';
import { ManagedAppRegistration } from './managedappregistration.entity';
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { ManagedAppOperation } from './managedappoperation.entity';
import { MobileAppIdentifierModel } from './mobileappidentifier.model';
import { ManagedAppPolicyModel } from './managedapppolicy.model';
import { ManagedAppOperationModel } from './managedappoperation.model';
import { MobileAppIdentifierCollection } from './mobileappidentifier.collection';
import { ManagedAppRegistrationCollection } from './managedappregistration.collection';
import { ManagedAppPolicyCollection } from './managedapppolicy.collection';
import { ManagedAppOperationCollection } from './managedappoperation.collection';
//#endregion

export class ManagedAppRegistrationModel<E extends ManagedAppRegistration> extends EntityModel<E> {
  //#region ODataApi Properties
  appIdentifier?: MobileAppIdentifierModel<MobileAppIdentifier>;
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
  appliedPolicies?: ManagedAppPolicyCollection<ManagedAppPolicy, ManagedAppPolicyModel<ManagedAppPolicy>>;
  intendedPolicies?: ManagedAppPolicyCollection<ManagedAppPolicy, ManagedAppPolicyModel<ManagedAppPolicy>>;
  operations?: ManagedAppOperationCollection<ManagedAppOperation, ManagedAppOperationModel<ManagedAppOperation>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}