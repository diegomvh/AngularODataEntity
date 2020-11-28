import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { ManagedAppClipboardSharingLevel } from './managedappclipboardsharinglevel.enum';
import { ManagedAppDataStorageLocation } from './managedappdatastoragelocation.enum';
import { ManagedAppDataTransferLevel } from './managedappdatatransferlevel.enum';
import { ManagedAppPinCharacterSet } from './managedapppincharacterset.enum';
import { ManagedBrowserType } from './managedbrowsertype.enum';
import { ManagedAppPolicyModel } from './managedapppolicy.model';
import { ManagedAppPolicyCollection } from './managedapppolicy.collection';
//#endregion

export interface ManagedAppProtection extends ManagedAppPolicy {
  //#region ODataApi Properties
  allowedDataStorageLocations: ManagedAppDataStorageLocation;
  allowedInboundDataTransferSources: ManagedAppDataTransferLevel;
  allowedOutboundClipboardSharingLevel: ManagedAppClipboardSharingLevel;
  allowedOutboundDataTransferDestinations: ManagedAppDataTransferLevel;
  contactSyncBlocked: boolean;
  dataBackupBlocked: boolean;
  deviceComplianceRequired: boolean;
  disableAppPinIfDevicePinIsSet: boolean;
  fingerprintBlocked: boolean;
  managedBrowser: ManagedBrowserType;
  managedBrowserToOpenLinksRequired: boolean;
  maximumPinRetries: number;
  minimumPinLength: number;
  minimumRequiredAppVersion?: string;
  minimumRequiredOsVersion?: string;
  minimumWarningAppVersion?: string;
  minimumWarningOsVersion?: string;
  organizationalCredentialsRequired: boolean;
  periodBeforePinReset: Duration;
  periodOfflineBeforeAccessCheck: Duration;
  periodOfflineBeforeWipeIsEnforced: Duration;
  periodOnlineBeforeAccessCheck: Duration;
  pinCharacterSet: ManagedAppPinCharacterSet;
  pinRequired: boolean;
  printBlocked: boolean;
  saveAsBlocked: boolean;
  simplePinBlocked: boolean;
  //#endregion
}