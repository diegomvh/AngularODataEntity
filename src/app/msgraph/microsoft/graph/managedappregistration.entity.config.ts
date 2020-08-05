import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppRegistration } from './managedappregistration.entity';
//#endregion

export const ManagedAppRegistrationConfig = {
  name: "ManagedAppRegistration",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastSyncDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    applicationVersion: {type: 'Edm.String'},
    managementSdkVersion: {type: 'Edm.String'},
    platformVersion: {type: 'Edm.String'},
    deviceType: {type: 'Edm.String'},
    deviceTag: {type: 'Edm.String'},
    deviceName: {type: 'Edm.String'},
    flaggedReasons: {type: 'graph.managedAppFlaggedReason', nullable: false, collection: true},
    userId: {type: 'Edm.String'},
    appIdentifier: {type: 'graph.mobileAppIdentifier'},
    version: {type: 'Edm.String'},
    appliedPolicies: {type: 'graph.managedAppPolicy', collection: true, navigation: true},
    intendedPolicies: {type: 'graph.managedAppPolicy', collection: true, navigation: true},
    operations: {type: 'graph.managedAppOperation', collection: true, navigation: true}
  }
} as EntityConfig<ManagedAppRegistration>;