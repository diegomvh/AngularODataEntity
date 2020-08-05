import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsPhone81GeneralConfiguration } from './windowsphone81generalconfiguration.entity';
//#endregion

export const WindowsPhone81GeneralConfigurationConfig = {
  name: "windowsPhone81GeneralConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    applyOnlyToWindowsPhone81: {type: 'Edm.Boolean', nullable: false},
    appsBlockCopyPaste: {type: 'Edm.Boolean', nullable: false},
    bluetoothBlocked: {type: 'Edm.Boolean', nullable: false},
    cameraBlocked: {type: 'Edm.Boolean', nullable: false},
    cellularBlockWifiTethering: {type: 'Edm.Boolean', nullable: false},
    compliantAppsList: {type: 'graph.appListItem', collection: true},
    compliantAppListType: {type: 'graph.appListType', nullable: false},
    diagnosticDataBlockSubmission: {type: 'Edm.Boolean', nullable: false},
    emailBlockAddingAccounts: {type: 'Edm.Boolean', nullable: false},
    locationServicesBlocked: {type: 'Edm.Boolean', nullable: false},
    microsoftAccountBlocked: {type: 'Edm.Boolean', nullable: false},
    nfcBlocked: {type: 'Edm.Boolean', nullable: false},
    passwordBlockSimple: {type: 'Edm.Boolean', nullable: false},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeScreenTimeout: {type: 'Edm.Int32'},
    passwordMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    passwordSignInFailureCountBeforeFactoryReset: {type: 'Edm.Int32'},
    passwordRequiredType: {type: 'graph.requiredPasswordType', nullable: false},
    passwordRequired: {type: 'Edm.Boolean', nullable: false},
    screenCaptureBlocked: {type: 'Edm.Boolean', nullable: false},
    storageBlockRemovableStorage: {type: 'Edm.Boolean', nullable: false},
    storageRequireEncryption: {type: 'Edm.Boolean', nullable: false},
    webBrowserBlocked: {type: 'Edm.Boolean', nullable: false},
    wifiBlocked: {type: 'Edm.Boolean', nullable: false},
    wifiBlockAutomaticConnectHotspots: {type: 'Edm.Boolean', nullable: false},
    wifiBlockHotspotReporting: {type: 'Edm.Boolean', nullable: false},
    windowsStoreBlocked: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<WindowsPhone81GeneralConfiguration>;