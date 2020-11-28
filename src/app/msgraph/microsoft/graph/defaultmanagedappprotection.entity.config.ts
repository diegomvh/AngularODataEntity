import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DefaultManagedAppProtection } from './defaultmanagedappprotection.entity';
import { DefaultManagedAppProtectionModel } from './defaultmanagedappprotection.model';
import { DefaultManagedAppProtectionCollection } from './defaultmanagedappprotection.collection';
//#endregion

export const DefaultManagedAppProtectionConfig = {
  name: "defaultManagedAppProtection",
  base: "microsoft.graph.managedAppProtection",
  model: DefaultManagedAppProtectionModel,
  collection: DefaultManagedAppProtectionCollection,
  annotations: [],
  fields: {
    appDataEncryptionType: {type: 'graph.managedAppDataEncryptionType', nullable: false},
    customSettings: {type: 'graph.keyValuePair', nullable: false, collection: true},
    deployedAppCount: {type: 'Edm.Int32', nullable: false},
    disableAppEncryptionIfDeviceEncryptionIsEnabled: {type: 'Edm.Boolean', nullable: false},
    encryptAppData: {type: 'Edm.Boolean', nullable: false},
    faceIdBlocked: {type: 'Edm.Boolean', nullable: false},
    minimumRequiredPatchVersion: {type: 'Edm.String'},
    minimumRequiredSdkVersion: {type: 'Edm.String'},
    minimumWarningPatchVersion: {type: 'Edm.String'},
    screenCaptureBlocked: {type: 'Edm.Boolean', nullable: false},
    apps: {type: 'graph.managedMobileApp', collection: true, navigation: true},
    deploymentSummary: {type: 'graph.managedAppPolicyDeploymentSummary', navigation: true}
  }
} as StructuredTypeConfig<DefaultManagedAppProtection>;