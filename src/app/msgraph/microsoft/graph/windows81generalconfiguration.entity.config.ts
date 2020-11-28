import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows81GeneralConfiguration } from './windows81generalconfiguration.entity';
import { Windows81GeneralConfigurationModel } from './windows81generalconfiguration.model';
import { Windows81GeneralConfigurationCollection } from './windows81generalconfiguration.collection';
//#endregion

export const Windows81GeneralConfigurationConfig = {
  name: "windows81GeneralConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: Windows81GeneralConfigurationModel,
  collection: Windows81GeneralConfigurationCollection,
  annotations: [],
  fields: {
    accountsBlockAddingNonMicrosoftAccountEmail: {type: 'Edm.Boolean', nullable: false},
    applyOnlyToWindows81: {type: 'Edm.Boolean', nullable: false},
    browserBlockAutofill: {type: 'Edm.Boolean', nullable: false},
    browserBlockAutomaticDetectionOfIntranetSites: {type: 'Edm.Boolean', nullable: false},
    browserBlockEnterpriseModeAccess: {type: 'Edm.Boolean', nullable: false},
    browserBlockJavaScript: {type: 'Edm.Boolean', nullable: false},
    browserBlockPlugins: {type: 'Edm.Boolean', nullable: false},
    browserBlockPopups: {type: 'Edm.Boolean', nullable: false},
    browserBlockSendingDoNotTrackHeader: {type: 'Edm.Boolean', nullable: false},
    browserBlockSingleWordEntryOnIntranetSites: {type: 'Edm.Boolean', nullable: false},
    browserEnterpriseModeSiteListLocation: {type: 'Edm.String'},
    browserInternetSecurityLevel: {type: 'graph.internetSiteSecurityLevel', nullable: false},
    browserIntranetSecurityLevel: {type: 'graph.siteSecurityLevel', nullable: false},
    browserLoggingReportLocation: {type: 'Edm.String'},
    browserRequireFirewall: {type: 'Edm.Boolean', nullable: false},
    browserRequireFraudWarning: {type: 'Edm.Boolean', nullable: false},
    browserRequireHighSecurityForRestrictedSites: {type: 'Edm.Boolean', nullable: false},
    browserRequireSmartScreen: {type: 'Edm.Boolean', nullable: false},
    browserTrustedSitesSecurityLevel: {type: 'graph.siteSecurityLevel', nullable: false},
    cellularBlockDataRoaming: {type: 'Edm.Boolean', nullable: false},
    diagnosticsBlockDataSubmission: {type: 'Edm.Boolean', nullable: false},
    passwordBlockPicturePasswordAndPin: {type: 'Edm.Boolean', nullable: false},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeScreenTimeout: {type: 'Edm.Int32'},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    passwordRequiredType: {type: 'graph.requiredPasswordType', nullable: false},
    passwordSignInFailureCountBeforeFactoryReset: {type: 'Edm.Int32'},
    storageRequireDeviceEncryption: {type: 'Edm.Boolean', nullable: false},
    updatesRequireAutomaticUpdates: {type: 'Edm.Boolean', nullable: false},
    userAccountControlSettings: {type: 'graph.windowsUserAccountControlSettings', nullable: false},
    workFoldersUrl: {type: 'Edm.String'}
  }
} as EntityConfig<Windows81GeneralConfiguration>;