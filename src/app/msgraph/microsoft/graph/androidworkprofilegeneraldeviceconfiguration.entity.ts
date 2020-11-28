import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { AndroidWorkProfileCrossProfileDataSharingType } from './androidworkprofilecrossprofiledatasharingtype.enum';
import { AndroidWorkProfileDefaultAppPermissionPolicyType } from './androidworkprofiledefaultapppermissionpolicytype.enum';
import { AndroidWorkProfileRequiredPasswordType } from './androidworkprofilerequiredpasswordtype.enum';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export interface AndroidWorkProfileGeneralDeviceConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  passwordBlockFingerprintUnlock: boolean;
  passwordBlockTrustAgents: boolean;
  passwordExpirationDays?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeScreenTimeout?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordRequiredType: AndroidWorkProfileRequiredPasswordType;
  passwordSignInFailureCountBeforeFactoryReset?: number;
  securityRequireVerifyApps: boolean;
  workProfileBlockAddingAccounts: boolean;
  workProfileBlockCamera: boolean;
  workProfileBlockCrossProfileCallerId: boolean;
  workProfileBlockCrossProfileContactsSearch: boolean;
  workProfileBlockCrossProfileCopyPaste: boolean;
  workProfileBlockNotificationsWhileDeviceLocked: boolean;
  workProfileBlockScreenCapture: boolean;
  workProfileBluetoothEnableContactSharing: boolean;
  workProfileDataSharingType: AndroidWorkProfileCrossProfileDataSharingType;
  workProfileDefaultAppPermissionPolicy: AndroidWorkProfileDefaultAppPermissionPolicyType;
  workProfilePasswordBlockFingerprintUnlock: boolean;
  workProfilePasswordBlockTrustAgents: boolean;
  workProfilePasswordExpirationDays?: number;
  workProfilePasswordMinimumLength?: number;
  workProfilePasswordMinLetterCharacters?: number;
  workProfilePasswordMinLowerCaseCharacters?: number;
  workProfilePasswordMinNonLetterCharacters?: number;
  workProfilePasswordMinNumericCharacters?: number;
  workProfilePasswordMinSymbolCharacters?: number;
  workProfilePasswordMinUpperCaseCharacters?: number;
  workProfilePasswordMinutesOfInactivityBeforeScreenTimeout?: number;
  workProfilePasswordPreviousPasswordBlockCount?: number;
  workProfilePasswordRequiredType: AndroidWorkProfileRequiredPasswordType;
  workProfilePasswordSignInFailureCountBeforeFactoryReset?: number;
  workProfileRequirePassword: boolean;
  //#endregion
}