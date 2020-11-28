import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { AndroidWorkProfileCrossProfileDataSharingType } from './androidworkprofilecrossprofiledatasharingtype.enum';
import { AndroidWorkProfileDefaultAppPermissionPolicyType } from './androidworkprofiledefaultapppermissionpolicytype.enum';
import { AndroidWorkProfileRequiredPasswordType } from './androidworkprofilerequiredpasswordtype.enum';
import { AndroidWorkProfileGeneralDeviceConfiguration } from './androidworkprofilegeneraldeviceconfiguration.entity';
import { AndroidWorkProfileGeneralDeviceConfigurationCollection } from './androidworkprofilegeneraldeviceconfiguration.collection';
//#endregion

export class AndroidWorkProfileGeneralDeviceConfigurationModel<E extends AndroidWorkProfileGeneralDeviceConfiguration> extends DeviceConfigurationModel<E> {
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
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}