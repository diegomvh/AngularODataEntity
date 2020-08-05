import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceHealthAttestationState } from './devicehealthattestationstate.entity';
//#endregion

export const DeviceHealthAttestationStateConfig = {
  name: "DeviceHealthAttestationState",
  annotations: [],
  fields: {
    lastUpdateDateTime: {type: 'Edm.String'},
    contentNamespaceUrl: {type: 'Edm.String'},
    deviceHealthAttestationStatus: {type: 'Edm.String'},
    contentVersion: {type: 'Edm.String'},
    issuedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    attestationIdentityKey: {type: 'Edm.String'},
    resetCount: {type: 'Edm.Int64', nullable: false},
    restartCount: {type: 'Edm.Int64', nullable: false},
    dataExcutionPolicy: {type: 'Edm.String'},
    bitLockerStatus: {type: 'Edm.String'},
    bootManagerVersion: {type: 'Edm.String'},
    codeIntegrityCheckVersion: {type: 'Edm.String'},
    secureBoot: {type: 'Edm.String'},
    bootDebugging: {type: 'Edm.String'},
    operatingSystemKernelDebugging: {type: 'Edm.String'},
    codeIntegrity: {type: 'Edm.String'},
    testSigning: {type: 'Edm.String'},
    safeMode: {type: 'Edm.String'},
    windowsPE: {type: 'Edm.String'},
    earlyLaunchAntiMalwareDriverProtection: {type: 'Edm.String'},
    virtualSecureMode: {type: 'Edm.String'},
    pcrHashAlgorithm: {type: 'Edm.String'},
    bootAppSecurityVersion: {type: 'Edm.String'},
    bootManagerSecurityVersion: {type: 'Edm.String'},
    tpmVersion: {type: 'Edm.String'},
    pcr0: {type: 'Edm.String'},
    secureBootConfigurationPolicyFingerPrint: {type: 'Edm.String'},
    codeIntegrityPolicy: {type: 'Edm.String'},
    bootRevisionListInfo: {type: 'Edm.String'},
    operatingSystemRevListInfo: {type: 'Edm.String'},
    healthStatusMismatchInfo: {type: 'Edm.String'},
    healthAttestationSupportedStatus: {type: 'Edm.String'}
  }
} as EntityConfig<DeviceHealthAttestationState>;