import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppProtection } from './managedappprotection.entity';
import { ManagedAppProtectionModel } from './managedappprotection.model';
import { ManagedAppProtectionCollection } from './managedappprotection.collection';
//#endregion

export const ManagedAppProtectionConfig = {
  name: "managedAppProtection",
  base: "microsoft.graph.managedAppPolicy",
  model: ManagedAppProtectionModel,
  collection: ManagedAppProtectionCollection,
  annotations: [],
  fields: {
    allowedDataStorageLocations: {type: 'graph.managedAppDataStorageLocation', nullable: false, collection: true},
    allowedInboundDataTransferSources: {type: 'graph.managedAppDataTransferLevel', nullable: false},
    allowedOutboundClipboardSharingLevel: {type: 'graph.managedAppClipboardSharingLevel', nullable: false},
    allowedOutboundDataTransferDestinations: {type: 'graph.managedAppDataTransferLevel', nullable: false},
    contactSyncBlocked: {type: 'Edm.Boolean', nullable: false},
    dataBackupBlocked: {type: 'Edm.Boolean', nullable: false},
    deviceComplianceRequired: {type: 'Edm.Boolean', nullable: false},
    disableAppPinIfDevicePinIsSet: {type: 'Edm.Boolean', nullable: false},
    fingerprintBlocked: {type: 'Edm.Boolean', nullable: false},
    managedBrowser: {type: 'graph.managedBrowserType', nullable: false},
    managedBrowserToOpenLinksRequired: {type: 'Edm.Boolean', nullable: false},
    maximumPinRetries: {type: 'Edm.Int32', nullable: false},
    minimumPinLength: {type: 'Edm.Int32', nullable: false},
    minimumRequiredAppVersion: {type: 'Edm.String'},
    minimumRequiredOsVersion: {type: 'Edm.String'},
    minimumWarningAppVersion: {type: 'Edm.String'},
    minimumWarningOsVersion: {type: 'Edm.String'},
    organizationalCredentialsRequired: {type: 'Edm.Boolean', nullable: false},
    periodBeforePinReset: {type: 'Edm.Duration', nullable: false},
    periodOfflineBeforeAccessCheck: {type: 'Edm.Duration', nullable: false},
    periodOfflineBeforeWipeIsEnforced: {type: 'Edm.Duration', nullable: false},
    periodOnlineBeforeAccessCheck: {type: 'Edm.Duration', nullable: false},
    pinCharacterSet: {type: 'graph.managedAppPinCharacterSet', nullable: false},
    pinRequired: {type: 'Edm.Boolean', nullable: false},
    printBlocked: {type: 'Edm.Boolean', nullable: false},
    saveAsBlocked: {type: 'Edm.Boolean', nullable: false},
    simplePinBlocked: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<ManagedAppProtection>;