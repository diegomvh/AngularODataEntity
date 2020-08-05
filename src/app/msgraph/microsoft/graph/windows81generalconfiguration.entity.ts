import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { InternetSiteSecurityLevel } from './internetsitesecuritylevel.enum';
import { SiteSecurityLevel } from './sitesecuritylevel.enum';
import { WindowsUserAccountControlSettings } from './windowsuseraccountcontrolsettings.enum';
//#endregion

export interface Windows81GeneralConfiguration extends DeviceConfiguration {
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
  browserRequireSmartScreen: boolean;
  browserEnterpriseModeSiteListLocation?: string;
  browserInternetSecurityLevel: InternetSiteSecurityLevel;
  browserIntranetSecurityLevel: SiteSecurityLevel;
  browserLoggingReportLocation?: string;
  browserRequireHighSecurityForRestrictedSites: boolean;
  browserRequireFirewall: boolean;
  browserRequireFraudWarning: boolean;
  browserTrustedSitesSecurityLevel: SiteSecurityLevel;
  cellularBlockDataRoaming: boolean;
  diagnosticsBlockDataSubmission: boolean;
  passwordBlockPicturePasswordAndPin: boolean;
  passwordExpirationDays?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeScreenTimeout?: number;
  passwordMinimumCharacterSetCount?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordRequiredType: RequiredPasswordType;
  passwordSignInFailureCountBeforeFactoryReset?: number;
  storageRequireDeviceEncryption: boolean;
  updatesRequireAutomaticUpdates: boolean;
  userAccountControlSettings: WindowsUserAccountControlSettings;
  workFoldersUrl?: string;
  //#endregion
}