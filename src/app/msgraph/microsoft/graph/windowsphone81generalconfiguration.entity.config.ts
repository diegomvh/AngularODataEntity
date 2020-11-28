import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsPhone81GeneralConfiguration } from './windowsphone81generalconfiguration.entity';
import { WindowsPhone81GeneralConfigurationModel } from './windowsphone81generalconfiguration.model';
import { WindowsPhone81GeneralConfigurationCollection } from './windowsphone81generalconfiguration.collection';
//#endregion

export const WindowsPhone81GeneralConfigurationConfig = {
  name: "windowsPhone81GeneralConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: WindowsPhone81GeneralConfigurationModel,
  collection: WindowsPhone81GeneralConfigurationCollection,
  annotations: [],
  fields: {
    applyOnlyToWindowsPhone81: {type: 'Edm.Boolean', nullable: false},
    appsBlockCopyPaste: {type: 'Edm.Boolean', nullable: false},
    bluetoothBlocked: {type: 'Edm.Boolean', nullable: false},
    cameraBlocked: {type: 'Edm.Boolean', nullable: false},
    cellularBlockWifiTethering: {type: 'Edm.Boolean', nullable: false},
    compliantAppListType: {type: 'graph.appListType', nullable: false},
    compliantAppsList: {type: 'graph.appListItem', collection: true},
    diagnosticDataBlockSubmission: {type: 'Edm.Boolean', nullable: false},
    emailBlockAddingAccounts: {type: 'Edm.Boolean', nullable: false},
    locationServicesBlocked: {type: 'Edm.Boolean', nullable: false},
    microsoftAccountBlocked: {type: 'Edm.Boolean', nullable: false},
    nfcBlocked: {type: 'Edm.Boolean', nullable: false},
    passwordBlockSimple: {type: 'Edm.Boolean', nullable: false},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeScreenTimeout: {type: 'Edm.Int32'},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    passwordRequired: {type: 'Edm.Boolean', nullable: false},
    passwordRequiredType: {type: 'graph.requiredPasswordType', nullable: false},
    passwordSignInFailureCountBeforeFactoryReset: {type: 'Edm.Int32'},
    screenCaptureBlocked: {type: 'Edm.Boolean', nullable: false},
    storageBlockRemovableStorage: {type: 'Edm.Boolean', nullable: false},
    storageRequireEncryption: {type: 'Edm.Boolean', nullable: false},
    webBrowserBlocked: {type: 'Edm.Boolean', nullable: false},
    wifiBlockAutomaticConnectHotspots: {type: 'Edm.Boolean', nullable: false},
    wifiBlocked: {type: 'Edm.Boolean', nullable: false},
    wifiBlockHotspotReporting: {type: 'Edm.Boolean', nullable: false},
    windowsStoreBlocked: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<WindowsPhone81GeneralConfiguration>;