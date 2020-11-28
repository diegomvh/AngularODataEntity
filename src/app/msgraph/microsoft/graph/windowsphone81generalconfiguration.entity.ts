import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { AppListType } from './applisttype.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { AppListItem } from './applistitem.entity';
import { AppListItemModel } from './applistitem.model';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { AppListItemCollection } from './applistitem.collection';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export interface WindowsPhone81GeneralConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  applyOnlyToWindowsPhone81: boolean;
  appsBlockCopyPaste: boolean;
  bluetoothBlocked: boolean;
  cameraBlocked: boolean;
  cellularBlockWifiTethering: boolean;
  compliantAppListType: AppListType;
  compliantAppsList?: AppListItem[];
  diagnosticDataBlockSubmission: boolean;
  emailBlockAddingAccounts: boolean;
  locationServicesBlocked: boolean;
  microsoftAccountBlocked: boolean;
  nfcBlocked: boolean;
  passwordBlockSimple: boolean;
  passwordExpirationDays?: number;
  passwordMinimumCharacterSetCount?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeScreenTimeout?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordRequired: boolean;
  passwordRequiredType: RequiredPasswordType;
  passwordSignInFailureCountBeforeFactoryReset?: number;
  screenCaptureBlocked: boolean;
  storageBlockRemovableStorage: boolean;
  storageRequireEncryption: boolean;
  webBrowserBlocked: boolean;
  wifiBlockAutomaticConnectHotspots: boolean;
  wifiBlocked: boolean;
  wifiBlockHotspotReporting: boolean;
  windowsStoreBlocked: boolean;
  //#endregion
}