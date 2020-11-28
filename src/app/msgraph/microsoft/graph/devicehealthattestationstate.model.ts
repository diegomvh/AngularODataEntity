import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceHealthAttestationState } from './devicehealthattestationstate.complex';
import { DeviceHealthAttestationStateCollection } from './devicehealthattestationstate.collection';
//#endregion

export class DeviceHealthAttestationStateModel<E extends DeviceHealthAttestationState> extends ODataModel<E> {
  //#region ODataApi Properties
  attestationIdentityKey?: string;
  bitLockerStatus?: string;
  bootAppSecurityVersion?: string;
  bootDebugging?: string;
  bootManagerSecurityVersion?: string;
  bootManagerVersion?: string;
  bootRevisionListInfo?: string;
  codeIntegrity?: string;
  codeIntegrityCheckVersion?: string;
  codeIntegrityPolicy?: string;
  contentNamespaceUrl?: string;
  contentVersion?: string;
  dataExcutionPolicy?: string;
  deviceHealthAttestationStatus?: string;
  earlyLaunchAntiMalwareDriverProtection?: string;
  healthAttestationSupportedStatus?: string;
  healthStatusMismatchInfo?: string;
  issuedDateTime: Date;
  lastUpdateDateTime?: string;
  operatingSystemKernelDebugging?: string;
  operatingSystemRevListInfo?: string;
  pcr0?: string;
  pcrHashAlgorithm?: string;
  resetCount: number;
  restartCount: number;
  safeMode?: string;
  secureBoot?: string;
  secureBootConfigurationPolicyFingerPrint?: string;
  testSigning?: string;
  tpmVersion?: string;
  virtualSecureMode?: string;
  windowsPE?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}