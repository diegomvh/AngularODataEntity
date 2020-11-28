import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidManagedAppProtection } from './androidmanagedappprotection.entity';
import { AndroidManagedAppProtectionModel } from './androidmanagedappprotection.model';
import { AndroidManagedAppProtectionCollection } from './androidmanagedappprotection.collection';
//#endregion

export const AndroidManagedAppProtectionConfig = {
  name: "androidManagedAppProtection",
  base: "microsoft.graph.targetedManagedAppProtection",
  model: AndroidManagedAppProtectionModel,
  collection: AndroidManagedAppProtectionCollection,
  annotations: [],
  fields: {
    customBrowserDisplayName: {type: 'Edm.String'},
    customBrowserPackageId: {type: 'Edm.String'},
    deployedAppCount: {type: 'Edm.Int32', nullable: false},
    disableAppEncryptionIfDeviceEncryptionIsEnabled: {type: 'Edm.Boolean', nullable: false},
    encryptAppData: {type: 'Edm.Boolean', nullable: false},
    minimumRequiredPatchVersion: {type: 'Edm.String'},
    minimumWarningPatchVersion: {type: 'Edm.String'},
    screenCaptureBlocked: {type: 'Edm.Boolean', nullable: false},
    apps: {type: 'graph.managedMobileApp', collection: true, navigation: true},
    deploymentSummary: {type: 'graph.managedAppPolicyDeploymentSummary', navigation: true}
  }
} as EntityConfig<AndroidManagedAppProtection>;