import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { AppListType } from './applisttype.enum';
import { AndroidRequiredPasswordType } from './androidrequiredpasswordtype.enum';
import { WebBrowserCookieSettings } from './webbrowsercookiesettings.enum';
import { AppListItem } from './applistitem.entity';
//#endregion

export interface AndroidGeneralDeviceConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  appsBlockClipboardSharing: boolean;
  appsBlockCopyPaste: boolean;
  appsBlockYouTube: boolean;
  bluetoothBlocked: boolean;
  cameraBlocked: boolean;
  cellularBlockDataRoaming: boolean;
  cellularBlockMessaging: boolean;
  cellularBlockVoiceRoaming: boolean;
  cellularBlockWiFiTethering: boolean;
  compliantAppsList?: AppListItem[];
  compliantAppListType: AppListType;
  diagnosticDataBlockSubmission: boolean;
  locationServicesBlocked: boolean;
  googleAccountBlockAutoSync: boolean;
  googlePlayStoreBlocked: boolean;
  kioskModeBlockSleepButton: boolean;
  kioskModeBlockVolumeButtons: boolean;
  kioskModeApps?: AppListItem[];
  nfcBlocked: boolean;
  passwordBlockFingerprintUnlock: boolean;
  passwordBlockTrustAgents: boolean;
  passwordExpirationDays?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeScreenTimeout?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordSignInFailureCountBeforeFactoryReset?: number;
  passwordRequiredType: AndroidRequiredPasswordType;
  passwordRequired: boolean;
  powerOffBlocked: boolean;
  factoryResetBlocked: boolean;
  screenCaptureBlocked: boolean;
  deviceSharingAllowed: boolean;
  storageBlockGoogleBackup: boolean;
  storageBlockRemovableStorage: boolean;
  storageRequireDeviceEncryption: boolean;
  storageRequireRemovableStorageEncryption: boolean;
  voiceAssistantBlocked: boolean;
  voiceDialingBlocked: boolean;
  webBrowserBlockPopups: boolean;
  webBrowserBlockAutofill: boolean;
  webBrowserBlockJavaScript: boolean;
  webBrowserBlocked: boolean;
  webBrowserCookieSettings: WebBrowserCookieSettings;
  wiFiBlocked: boolean;
  appsInstallAllowList?: AppListItem[];
  appsLaunchBlockList?: AppListItem[];
  appsHideList?: AppListItem[];
  securityRequireVerifyApps: boolean;
  //#endregion
}