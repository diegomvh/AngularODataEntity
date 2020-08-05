import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { ManagedAppDataStorageLocation } from './managedappdatastoragelocation.enum';
import { ManagedAppDataTransferLevel } from './managedappdatatransferlevel.enum';
import { ManagedAppClipboardSharingLevel } from './managedappclipboardsharinglevel.enum';
import { ManagedAppPinCharacterSet } from './managedapppincharacterset.enum';
import { ManagedBrowserType } from './managedbrowsertype.enum';
//#endregion

export interface ManagedAppProtection extends ManagedAppPolicy {
  //#region ODataApi Properties
  periodOfflineBeforeAccessCheck: Duration;
  periodOnlineBeforeAccessCheck: Duration;
  allowedInboundDataTransferSources: ManagedAppDataTransferLevel;
  allowedOutboundDataTransferDestinations: ManagedAppDataTransferLevel;
  organizationalCredentialsRequired: boolean;
  allowedOutboundClipboardSharingLevel: ManagedAppClipboardSharingLevel;
  dataBackupBlocked: boolean;
  deviceComplianceRequired: boolean;
  managedBrowserToOpenLinksRequired: boolean;
  saveAsBlocked: boolean;
  periodOfflineBeforeWipeIsEnforced: Duration;
  pinRequired: boolean;
  maximumPinRetries: number;
  simplePinBlocked: boolean;
  minimumPinLength: number;
  pinCharacterSet: ManagedAppPinCharacterSet;
  periodBeforePinReset: Duration;
  allowedDataStorageLocations: ManagedAppDataStorageLocation;
  contactSyncBlocked: boolean;
  printBlocked: boolean;
  fingerprintBlocked: boolean;
  disableAppPinIfDevicePinIsSet: boolean;
  minimumRequiredOsVersion?: string;
  minimumWarningOsVersion?: string;
  minimumRequiredAppVersion?: string;
  minimumWarningAppVersion?: string;
  managedBrowser: ManagedBrowserType;
  //#endregion
}