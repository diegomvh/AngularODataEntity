import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { AndroidRequiredPasswordType } from './androidrequiredpasswordtype.enum';
import { AppListType } from './applisttype.enum';
import { WebBrowserCookieSettings } from './webbrowsercookiesettings.enum';
import { AppListItem } from './applistitem.complex';
import { AndroidGeneralDeviceConfiguration } from './androidgeneraldeviceconfiguration.entity';
import { AppListItemModel } from './applistitem.model';
import { AppListItemCollection } from './applistitem.collection';
import { AndroidGeneralDeviceConfigurationCollection } from './androidgeneraldeviceconfiguration.collection';
//#endregion

export class AndroidGeneralDeviceConfigurationModel<E extends AndroidGeneralDeviceConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  appsBlockClipboardSharing: boolean;
  appsBlockCopyPaste: boolean;
  appsBlockYouTube: boolean;
  appsHideList?: AppListItemCollection<AppListItem, AppListItemModel<AppListItem>>;
  appsInstallAllowList?: AppListItemCollection<AppListItem, AppListItemModel<AppListItem>>;
  appsLaunchBlockList?: AppListItemCollection<AppListItem, AppListItemModel<AppListItem>>;
  bluetoothBlocked: boolean;
  cameraBlocked: boolean;
  cellularBlockDataRoaming: boolean;
  cellularBlockMessaging: boolean;
  cellularBlockVoiceRoaming: boolean;
  cellularBlockWiFiTethering: boolean;
  compliantAppListType: AppListType;
  compliantAppsList?: AppListItemCollection<AppListItem, AppListItemModel<AppListItem>>;
  deviceSharingAllowed: boolean;
  diagnosticDataBlockSubmission: boolean;
  factoryResetBlocked: boolean;
  googleAccountBlockAutoSync: boolean;
  googlePlayStoreBlocked: boolean;
  kioskModeApps?: AppListItemCollection<AppListItem, AppListItemModel<AppListItem>>;
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
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}