import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { AppListType } from './applisttype.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { AppListItem } from './applistitem.complex';
import { WindowsPhone81GeneralConfiguration } from './windowsphone81generalconfiguration.entity';
import { AppListItemModel } from './applistitem.model';
import { AppListItemCollection } from './applistitem.collection';
import { WindowsPhone81GeneralConfigurationCollection } from './windowsphone81generalconfiguration.collection';
//#endregion

export class WindowsPhone81GeneralConfigurationModel<E extends WindowsPhone81GeneralConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  applyOnlyToWindowsPhone81: boolean;
  appsBlockCopyPaste: boolean;
  bluetoothBlocked: boolean;
  cameraBlocked: boolean;
  cellularBlockWifiTethering: boolean;
  compliantAppListType: AppListType;
  compliantAppsList?: AppListItemCollection<AppListItem, AppListItemModel<AppListItem>>;
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
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}