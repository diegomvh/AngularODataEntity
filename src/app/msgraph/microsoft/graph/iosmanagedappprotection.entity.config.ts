import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosManagedAppProtection } from './iosmanagedappprotection.entity';
//#endregion

export const IosManagedAppProtectionConfig = {
  name: "IosManagedAppProtection",
  base: "microsoft.graph.targetedManagedAppProtection",
  annotations: [],
  fields: {
    appDataEncryptionType: {type: 'graph.managedAppDataEncryptionType', nullable: false},
    minimumRequiredSdkVersion: {type: 'Edm.String'},
    deployedAppCount: {type: 'Edm.Int32', nullable: false},
    faceIdBlocked: {type: 'Edm.Boolean', nullable: false},
    customBrowserProtocol: {type: 'Edm.String'},
    apps: {type: 'graph.managedMobileApp', collection: true, navigation: true},
    deploymentSummary: {type: 'graph.managedAppPolicyDeploymentSummary', navigation: true}
  }
} as EntityConfig<IosManagedAppProtection>;