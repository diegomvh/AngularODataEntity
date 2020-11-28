import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface DeviceHealthAttestationState {
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
}