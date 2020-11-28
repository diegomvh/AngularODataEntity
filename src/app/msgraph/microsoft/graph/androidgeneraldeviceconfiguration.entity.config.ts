import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidGeneralDeviceConfiguration } from './androidgeneraldeviceconfiguration.entity';
import { AndroidGeneralDeviceConfigurationModel } from './androidgeneraldeviceconfiguration.model';
import { AndroidGeneralDeviceConfigurationCollection } from './androidgeneraldeviceconfiguration.collection';
//#endregion

export const AndroidGeneralDeviceConfigurationConfig = {
  name: "androidGeneralDeviceConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: AndroidGeneralDeviceConfigurationModel,
  collection: AndroidGeneralDeviceConfigurationCollection,
  annotations: [],
  fields: {
    appsBlockClipboardSharing: {type: 'Edm.Boolean', nullable: false},
    appsBlockCopyPaste: {type: 'Edm.Boolean', nullable: false},
    appsBlockYouTube: {type: 'Edm.Boolean', nullable: false},
    appsHideList: {type: 'graph.appListItem', collection: true},
    appsInstallAllowList: {type: 'graph.appListItem', collection: true},
    appsLaunchBlockList: {type: 'graph.appListItem', collection: true},
    bluetoothBlocked: {type: 'Edm.Boolean', nullable: false},
    cameraBlocked: {type: 'Edm.Boolean', nullable: false},
    cellularBlockDataRoaming: {type: 'Edm.Boolean', nullable: false},
    cellularBlockMessaging: {type: 'Edm.Boolean', nullable: false},
    cellularBlockVoiceRoaming: {type: 'Edm.Boolean', nullable: false},
    cellularBlockWiFiTethering: {type: 'Edm.Boolean', nullable: false},
    compliantAppListType: {type: 'graph.appListType', nullable: false},
    compliantAppsList: {type: 'graph.appListItem', collection: true},
    deviceSharingAllowed: {type: 'Edm.Boolean', nullable: false},
    diagnosticDataBlockSubmission: {type: 'Edm.Boolean', nullable: false},
    factoryResetBlocked: {type: 'Edm.Boolean', nullable: false},
    googleAccountBlockAutoSync: {type: 'Edm.Boolean', nullable: false},
    googlePlayStoreBlocked: {type: 'Edm.Boolean', nullable: false},
    kioskModeApps: {type: 'graph.appListItem', collection: true},
    kioskModeBlockSleepButton: {type: 'Edm.Boolean', nullable: false},
    kioskModeBlockVolumeButtons: {type: 'Edm.Boolean', nullable: false},
    locationServicesBlocked: {type: 'Edm.Boolean', nullable: false},
    nfcBlocked: {type: 'Edm.Boolean', nullable: false},
    passwordBlockFingerprintUnlock: {type: 'Edm.Boolean', nullable: false},
    passwordBlockTrustAgents: {type: 'Edm.Boolean', nullable: false},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeScreenTimeout: {type: 'Edm.Int32'},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    passwordRequired: {type: 'Edm.Boolean', nullable: false},
    passwordRequiredType: {type: 'graph.androidRequiredPasswordType', nullable: false},
    passwordSignInFailureCountBeforeFactoryReset: {type: 'Edm.Int32'},
    powerOffBlocked: {type: 'Edm.Boolean', nullable: false},
    screenCaptureBlocked: {type: 'Edm.Boolean', nullable: false},
    securityRequireVerifyApps: {type: 'Edm.Boolean', nullable: false},
    storageBlockGoogleBackup: {type: 'Edm.Boolean', nullable: false},
    storageBlockRemovableStorage: {type: 'Edm.Boolean', nullable: false},
    storageRequireDeviceEncryption: {type: 'Edm.Boolean', nullable: false},
    storageRequireRemovableStorageEncryption: {type: 'Edm.Boolean', nullable: false},
    voiceAssistantBlocked: {type: 'Edm.Boolean', nullable: false},
    voiceDialingBlocked: {type: 'Edm.Boolean', nullable: false},
    webBrowserBlockAutofill: {type: 'Edm.Boolean', nullable: false},
    webBrowserBlocked: {type: 'Edm.Boolean', nullable: false},
    webBrowserBlockJavaScript: {type: 'Edm.Boolean', nullable: false},
    webBrowserBlockPopups: {type: 'Edm.Boolean', nullable: false},
    webBrowserCookieSettings: {type: 'graph.webBrowserCookieSettings', nullable: false},
    wiFiBlocked: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<AndroidGeneralDeviceConfiguration>;