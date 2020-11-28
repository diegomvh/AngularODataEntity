import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { AndroidRequiredPasswordType } from './androidrequiredpasswordtype.enum';
import { AppListType } from './applisttype.enum';
import { WebBrowserCookieSettings } from './webbrowsercookiesettings.enum';
import { AppListItem } from './applistitem.complex';
import { AppListItemModel } from './applistitem.model';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { AppListItemCollection } from './applistitem.collection';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export interface AndroidGeneralDeviceConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  appsBlockClipboardSharing: boolean;
  appsBlockCopyPaste: boolean;
  appsBlockYouTube: boolean;
  appsHideList?: AppListItem[];
  appsInstallAllowList?: AppListItem[];
  appsLaunchBlockList?: AppListItem[];
  bluetoothBlocked: boolean;
  cameraBlocked: boolean;
  cellularBlockDataRoaming: boolean;
  cellularBlockMessaging: boolean;
  cellularBlockVoiceRoaming: boolean;
  cellularBlockWiFiTethering: boolean;
  compliantAppListType: AppListType;
  compliantAppsList?: AppListItem[];
  deviceSharingAllowed: boolean;
  diagnosticDataBlockSubmission: boolean;
  factoryResetBlocked: boolean;
  googleAccountBlockAutoSync: boolean;
  googlePlayStoreBlocked: boolean;
  kioskModeApps?: AppListItem[];
  kioskModeBlockSleepButton: boolean;
  kioskModeBlockVolumeButtons: boolean;
  locationServicesBlocked: boolean;
  nfcBlocked: boolean;
  passwordBlockFingerprintUnlock: boolean;
  passwordBlockTrustAgents: boolean;
  passwordExpirationDays?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeScreenTimeout?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordRequired: boolean;
  passwordRequiredType: AndroidRequiredPasswordType;
  passwordSignInFailureCountBeforeFactoryReset?: number;
  powerOffBlocked: boolean;
  screenCaptureBlocked: boolean;
  securityRequireVerifyApps: boolean;
  storageBlockGoogleBackup: boolean;
  storageBlockRemovableStorage: boolean;
  storageRequireDeviceEncryption: boolean;
  storageRequireRemovableStorageEncryption: boolean;
  voiceAssistantBlocked: boolean;
  voiceDialingBlocked: boolean;
  webBrowserBlockAutofill: boolean;
  webBrowserBlocked: boolean;
  webBrowserBlockJavaScript: boolean;
  webBrowserBlockPopups: boolean;
  webBrowserCookieSettings: WebBrowserCookieSettings;
  wiFiBlocked: boolean;
  //#endregion
}