import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppProtection } from './managedappprotection.entity';
//#endregion

export const ManagedAppProtectionConfig = {
  name: "managedAppProtection",
  base: "microsoft.graph.managedAppPolicy",
  annotations: [],
  fields: {
    periodOfflineBeforeAccessCheck: {type: 'Edm.Duration', nullable: false},
    periodOnlineBeforeAccessCheck: {type: 'Edm.Duration', nullable: false},
    allowedInboundDataTransferSources: {type: 'graph.managedAppDataTransferLevel', nullable: false},
    allowedOutboundDataTransferDestinations: {type: 'graph.managedAppDataTransferLevel', nullable: false},
    organizationalCredentialsRequired: {type: 'Edm.Boolean', nullable: false},
    allowedOutboundClipboardSharingLevel: {type: 'graph.managedAppClipboardSharingLevel', nullable: false},
    dataBackupBlocked: {type: 'Edm.Boolean', nullable: false},
    deviceComplianceRequired: {type: 'Edm.Boolean', nullable: false},
    managedBrowserToOpenLinksRequired: {type: 'Edm.Boolean', nullable: false},
    saveAsBlocked: {type: 'Edm.Boolean', nullable: false},
    periodOfflineBeforeWipeIsEnforced: {type: 'Edm.Duration', nullable: false},
    pinRequired: {type: 'Edm.Boolean', nullable: false},
    maximumPinRetries: {type: 'Edm.Int32', nullable: false},
    simplePinBlocked: {type: 'Edm.Boolean', nullable: false},
    minimumPinLength: {type: 'Edm.Int32', nullable: false},
    pinCharacterSet: {type: 'graph.managedAppPinCharacterSet', nullable: false},
    periodBeforePinReset: {type: 'Edm.Duration', nullable: false},
    allowedDataStorageLocations: {type: 'graph.managedAppDataStorageLocation', nullable: false, collection: true},
    contactSyncBlocked: {type: 'Edm.Boolean', nullable: false},
    printBlocked: {type: 'Edm.Boolean', nullable: false},
    fingerprintBlocked: {type: 'Edm.Boolean', nullable: false},
    disableAppPinIfDevicePinIsSet: {type: 'Edm.Boolean', nullable: false},
    minimumRequiredOsVersion: {type: 'Edm.String'},
    minimumWarningOsVersion: {type: 'Edm.String'},
    minimumRequiredAppVersion: {type: 'Edm.String'},
    minimumWarningAppVersion: {type: 'Edm.String'},
    managedBrowser: {type: 'graph.managedBrowserType', nullable: false}
  }
} as EntityConfig<ManagedAppProtection>;