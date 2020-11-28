import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppRegistration } from './managedappregistration.entity';
import { ManagedAppRegistrationModel } from './managedappregistration.model';
import { ManagedAppRegistrationCollection } from './managedappregistration.collection';
//#endregion

export const ManagedAppRegistrationConfig = {
  name: "managedAppRegistration",
  base: "microsoft.graph.entity",
  model: ManagedAppRegistrationModel,
  collection: ManagedAppRegistrationCollection,
  annotations: [],
  fields: {
    appIdentifier: {type: 'graph.mobileAppIdentifier'},
    applicationVersion: {type: 'Edm.String'},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    deviceName: {type: 'Edm.String'},
    deviceTag: {type: 'Edm.String'},
    deviceType: {type: 'Edm.String'},
    flaggedReasons: {type: 'graph.managedAppFlaggedReason', nullable: false, collection: true},
    lastSyncDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    managementSdkVersion: {type: 'Edm.String'},
    platformVersion: {type: 'Edm.String'},
    userId: {type: 'Edm.String'},
    version: {type: 'Edm.String'},
    appliedPolicies: {type: 'graph.managedAppPolicy', collection: true, navigation: true},
    intendedPolicies: {type: 'graph.managedAppPolicy', collection: true, navigation: true},
    operations: {type: 'graph.managedAppOperation', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ManagedAppRegistration>;