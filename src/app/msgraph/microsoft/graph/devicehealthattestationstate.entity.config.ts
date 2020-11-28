import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceHealthAttestationState } from './devicehealthattestationstate.entity';
import { DeviceHealthAttestationStateModel } from './devicehealthattestationstate.model';
import { DeviceHealthAttestationStateCollection } from './devicehealthattestationstate.collection';
//#endregion

export const DeviceHealthAttestationStateConfig = {
  name: "deviceHealthAttestationState",
  model: DeviceHealthAttestationStateModel,
  collection: DeviceHealthAttestationStateCollection,
  annotations: [],
  fields: {
    attestationIdentityKey: {type: 'Edm.String'},
    bitLockerStatus: {type: 'Edm.String'},
    bootAppSecurityVersion: {type: 'Edm.String'},
    bootDebugging: {type: 'Edm.String'},
    bootManagerSecurityVersion: {type: 'Edm.String'},
    bootManagerVersion: {type: 'Edm.String'},
    bootRevisionListInfo: {type: 'Edm.String'},
    codeIntegrity: {type: 'Edm.String'},
    codeIntegrityCheckVersion: {type: 'Edm.String'},
    codeIntegrityPolicy: {type: 'Edm.String'},
    contentNamespaceUrl: {type: 'Edm.String'},
    contentVersion: {type: 'Edm.String'},
    dataExcutionPolicy: {type: 'Edm.String'},
    deviceHealthAttestationStatus: {type: 'Edm.String'},
    earlyLaunchAntiMalwareDriverProtection: {type: 'Edm.String'},
    healthAttestationSupportedStatus: {type: 'Edm.String'},
    healthStatusMismatchInfo: {type: 'Edm.String'},
    issuedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastUpdateDateTime: {type: 'Edm.String'},
    operatingSystemKernelDebugging: {type: 'Edm.String'},
    operatingSystemRevListInfo: {type: 'Edm.String'},
    pcr0: {type: 'Edm.String'},
    pcrHashAlgorithm: {type: 'Edm.String'},
    resetCount: {type: 'Edm.Int64', nullable: false},
    restartCount: {type: 'Edm.Int64', nullable: false},
    safeMode: {type: 'Edm.String'},
    secureBoot: {type: 'Edm.String'},
    secureBootConfigurationPolicyFingerPrint: {type: 'Edm.String'},
    testSigning: {type: 'Edm.String'},
    tpmVersion: {type: 'Edm.String'},
    virtualSecureMode: {type: 'Edm.String'},
    windowsPE: {type: 'Edm.String'}
  }
} as EntityConfig<DeviceHealthAttestationState>;