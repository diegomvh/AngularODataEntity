import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { InternetSiteSecurityLevel } from './internetsitesecuritylevel.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { SiteSecurityLevel } from './sitesecuritylevel.enum';
import { WindowsUserAccountControlSettings } from './windowsuseraccountcontrolsettings.enum';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
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
}