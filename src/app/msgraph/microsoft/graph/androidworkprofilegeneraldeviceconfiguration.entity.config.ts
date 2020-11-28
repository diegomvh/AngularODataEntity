import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidWorkProfileGeneralDeviceConfiguration } from './androidworkprofilegeneraldeviceconfiguration.entity';
import { AndroidWorkProfileGeneralDeviceConfigurationModel } from './androidworkprofilegeneraldeviceconfiguration.model';
import { AndroidWorkProfileGeneralDeviceConfigurationCollection } from './androidworkprofilegeneraldeviceconfiguration.collection';
//#endregion

export const AndroidWorkProfileGeneralDeviceConfigurationConfig = {
  name: "androidWorkProfileGeneralDeviceConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: AndroidWorkProfileGeneralDeviceConfigurationModel,
  collection: AndroidWorkProfileGeneralDeviceConfigurationCollection,
  annotations: [],
  fields: {
    passwordBlockFingerprintUnlock: {type: 'Edm.Boolean', nullable: false},
    passwordBlockTrustAgents: {type: 'Edm.Boolean', nullable: false},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeScreenTimeout: {type: 'Edm.Int32'},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    passwordRequiredType: {type: 'graph.androidWorkProfileRequiredPasswordType', nullable: false},
    passwordSignInFailureCountBeforeFactoryReset: {type: 'Edm.Int32'},
    securityRequireVerifyApps: {type: 'Edm.Boolean', nullable: false},
    workProfileBlockAddingAccounts: {type: 'Edm.Boolean', nullable: false},
    workProfileBlockCamera: {type: 'Edm.Boolean', nullable: false},
    workProfileBlockCrossProfileCallerId: {type: 'Edm.Boolean', nullable: false},
    workProfileBlockCrossProfileContactsSearch: {type: 'Edm.Boolean', nullable: false},
    workProfileBlockCrossProfileCopyPaste: {type: 'Edm.Boolean', nullable: false},
    workProfileBlockNotificationsWhileDeviceLocked: {type: 'Edm.Boolean', nullable: false},
    workProfileBlockScreenCapture: {type: 'Edm.Boolean', nullable: false},
    workProfileBluetoothEnableContactSharing: {type: 'Edm.Boolean', nullable: false},
    workProfileDataSharingType: {type: 'graph.androidWorkProfileCrossProfileDataSharingType', nullable: false},
    workProfileDefaultAppPermissionPolicy: {type: 'graph.androidWorkProfileDefaultAppPermissionPolicyType', nullable: false},
    workProfilePasswordBlockFingerprintUnlock: {type: 'Edm.Boolean', nullable: false},
    workProfilePasswordBlockTrustAgents: {type: 'Edm.Boolean', nullable: false},
    workProfilePasswordExpirationDays: {type: 'Edm.Int32'},
    workProfilePasswordMinimumLength: {type: 'Edm.Int32'},
    workProfilePasswordMinLetterCharacters: {type: 'Edm.Int32'},
    workProfilePasswordMinLowerCaseCharacters: {type: 'Edm.Int32'},
    workProfilePasswordMinNonLetterCharacters: {type: 'Edm.Int32'},
    workProfilePasswordMinNumericCharacters: {type: 'Edm.Int32'},
    workProfilePasswordMinSymbolCharacters: {type: 'Edm.Int32'},
    workProfilePasswordMinUpperCaseCharacters: {type: 'Edm.Int32'},
    workProfilePasswordMinutesOfInactivityBeforeScreenTimeout: {type: 'Edm.Int32'},
    workProfilePasswordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    workProfilePasswordRequiredType: {type: 'graph.androidWorkProfileRequiredPasswordType', nullable: false},
    workProfilePasswordSignInFailureCountBeforeFactoryReset: {type: 'Edm.Int32'},
    workProfileRequirePassword: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<AndroidWorkProfileGeneralDeviceConfiguration>;