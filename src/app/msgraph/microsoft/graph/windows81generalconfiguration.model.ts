import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { InternetSiteSecurityLevel } from './internetsitesecuritylevel.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { SiteSecurityLevel } from './sitesecuritylevel.enum';
import { WindowsUserAccountControlSettings } from './windowsuseraccountcontrolsettings.enum';
import { Windows81GeneralConfiguration } from './windows81generalconfiguration.entity';
import { Windows81GeneralConfigurationCollection } from './windows81generalconfiguration.collection';
//#endregion

export class Windows81GeneralConfigurationModel<E extends Windows81GeneralConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  accountsBlockAddingNonMicrosoftAccountEmail: boolean;
  applyOnlyToWindows81: boolean;
  browserBlockAutofill: boolean;
  browserBlockAutomaticDetectionOfIntranetSites: boolean;
  browserBlockEnterpriseModeAccess: boolean;
  browserBlockJavaScript: boolean;
  browserBlockPlugins: boolean;
  browserBlockPopups: boolean;
  browserBlockSendingDoNotTrackHeader: boolean;
  browserBlockSingleWordEntryOnIntranetSites: boolean;
  browserEnterpriseModeSiteListLocation?: string;
  browserInternetSecurityLevel: InternetSiteSecurityLevel;
  browserIntranetSecurityLevel: SiteSecurityLevel;
  browserLoggingReportLocation?: string;
  browserRequireFirewall: boolean;
  browserRequireFraudWarning: boolean;
  browserRequireHighSecurityForRestrictedSites: boolean;
  browserRequireSmartScreen: boolean;
  browserTrustedSitesSecurityLevel: SiteSecurityLevel;
  cellularBlockDataRoaming: boolean;
  diagnosticsBlockDataSubmission: boolean;
  passwordBlockPicturePasswordAndPin: boolean;
  passwordExpirationDays?: number;
  passwordMinimumCharacterSetCount?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeScreenTimeout?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordRequiredType: RequiredPasswordType;
  passwordSignInFailureCountBeforeFactoryReset?: number;
  storageRequireDeviceEncryption: boolean;
  updatesRequireAutomaticUpdates: boolean;
  userAccountControlSettings: WindowsUserAccountControlSettings;
  workFoldersUrl?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}