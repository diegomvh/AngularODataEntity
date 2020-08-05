import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { AndroidWorkProfileRequiredPasswordType } from './androidworkprofilerequiredpasswordtype.enum';
import { AndroidWorkProfileCrossProfileDataSharingType } from './androidworkprofilecrossprofiledatasharingtype.enum';
import { AndroidWorkProfileDefaultAppPermissionPolicyType } from './androidworkprofiledefaultapppermissionpolicytype.enum';
//#endregion

export interface AndroidWorkProfileGeneralDeviceConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  passwordBlockFingerprintUnlock: boolean;
  passwordBlockTrustAgents: boolean;
  passwordExpirationDays?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeScreenTimeout?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordSignInFailureCountBeforeFactoryReset?: number;
  passwordRequiredType: AndroidWorkProfileRequiredPasswordType;
  workProfileDataSharingType: AndroidWorkProfileCrossProfileDataSharingType;
  workProfileBlockNotificationsWhileDeviceLocked: boolean;
  workProfileBlockAddingAccounts: boolean;
  workProfileBluetoothEnableContactSharing: boolean;
  workProfileBlockScreenCapture: boolean;
  workProfileBlockCrossProfileCallerId: boolean;
  workProfileBlockCamera: boolean;
  workProfileBlockCrossProfileContactsSearch: boolean;
  workProfileBlockCrossProfileCopyPaste: boolean;
  workProfileDefaultAppPermissionPolicy: AndroidWorkProfileDefaultAppPermissionPolicyType;
  workProfilePasswordBlockFingerprintUnlock: boolean;
  workProfilePasswordBlockTrustAgents: boolean;
  workProfilePasswordExpirationDays?: number;
  workProfilePasswordMinimumLength?: number;
  workProfilePasswordMinNumericCharacters?: number;
  workProfilePasswordMinNonLetterCharacters?: number;
  workProfilePasswordMinLetterCharacters?: number;
  workProfilePasswordMinLowerCaseCharacters?: number;
  workProfilePasswordMinUpperCaseCharacters?: number;
  workProfilePasswordMinSymbolCharacters?: number;
  workProfilePasswordMinutesOfInactivityBeforeScreenTimeout?: number;
  workProfilePasswordPreviousPasswordBlockCount?: number;
  workProfilePasswordSignInFailureCountBeforeFactoryReset?: number;
  workProfilePasswordRequiredType: AndroidWorkProfileRequiredPasswordType;
  workProfileRequirePassword: boolean;
  securityRequireVerifyApps: boolean;
  //#endregion
}