import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosManagedAppProtection } from './iosmanagedappprotection.entity';
import { IosManagedAppProtectionModel } from './iosmanagedappprotection.model';
import { IosManagedAppProtectionCollection } from './iosmanagedappprotection.collection';
//#endregion

export const IosManagedAppProtectionConfig = {
  name: "iosManagedAppProtection",
  base: "microsoft.graph.targetedManagedAppProtection",
  model: IosManagedAppProtectionModel,
  collection: IosManagedAppProtectionCollection,
  annotations: [],
  fields: {
    appDataEncryptionType: {type: 'graph.managedAppDataEncryptionType', nullable: false},
    customBrowserProtocol: {type: 'Edm.String'},
    deployedAppCount: {type: 'Edm.Int32', nullable: false},
    faceIdBlocked: {type: 'Edm.Boolean', nullable: false},
    minimumRequiredSdkVersion: {type: 'Edm.String'},
    apps: {type: 'graph.managedMobileApp', collection: true, navigation: true},
    deploymentSummary: {type: 'graph.managedAppPolicyDeploymentSummary', navigation: true}
  }
} as EntityConfig<IosManagedAppProtection>;