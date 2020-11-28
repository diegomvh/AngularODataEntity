import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDevice } from './manageddevice.entity';
import { ManagedDeviceModel } from './manageddevice.model';
import { ManagedDeviceCollection } from './manageddevice.collection';
//#endregion

export const ManagedDeviceConfig = {
  name: "managedDevice",
  base: "microsoft.graph.entity",
  model: ManagedDeviceModel,
  collection: ManagedDeviceCollection,
  annotations: [],
  fields: {
    activationLockBypassCode: {type: 'Edm.String'},
    androidSecurityPatchLevel: {type: 'Edm.String'},
    azureADDeviceId: {type: 'Edm.String'},
    azureADRegistered: {type: 'Edm.Boolean'},
    complianceGracePeriodExpirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    complianceState: {type: 'graph.complianceState', nullable: false},
    configurationManagerClientEnabledFeatures: {type: 'graph.configurationManagerClientEnabledFeatures'},
    deviceActionResults: {type: 'graph.deviceActionResult', collection: true},
    deviceCategoryDisplayName: {type: 'Edm.String'},
    deviceEnrollmentType: {type: 'graph.deviceEnrollmentType', nullable: false},
    deviceHealthAttestationState: {type: 'graph.deviceHealthAttestationState'},
    deviceName: {type: 'Edm.String'},
    deviceRegistrationState: {type: 'graph.deviceRegistrationState', nullable: false},
    easActivated: {type: 'Edm.Boolean', nullable: false},
    easActivationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    easDeviceId: {type: 'Edm.String'},
    emailAddress: {type: 'Edm.String'},
    enrolledDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    exchangeAccessState: {type: 'graph.deviceManagementExchangeAccessState', nullable: false},
    exchangeAccessStateReason: {type: 'graph.deviceManagementExchangeAccessStateReason', nullable: false},
    exchangeLastSuccessfulSyncDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    freeStorageSpaceInBytes: {type: 'Edm.Int64', nullable: false},
    imei: {type: 'Edm.String'},
    isEncrypted: {type: 'Edm.Boolean', nullable: false},
    isSupervised: {type: 'Edm.Boolean', nullable: false},
    jailBroken: {type: 'Edm.String'},
    lastSyncDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    managedDeviceName: {type: 'Edm.String'},
    managedDeviceOwnerType: {type: 'graph.managedDeviceOwnerType', nullable: false},
    managementAgent: {type: 'graph.managementAgentType', nullable: false},
    manufacturer: {type: 'Edm.String'},
    meid: {type: 'Edm.String'},
    model: {type: 'Edm.String'},
    operatingSystem: {type: 'Edm.String'},
    osVersion: {type: 'Edm.String'},
    partnerReportedThreatState: {type: 'graph.managedDevicePartnerReportedHealthState', nullable: false},
    phoneNumber: {type: 'Edm.String'},
    remoteAssistanceSessionErrorDetails: {type: 'Edm.String'},
    remoteAssistanceSessionUrl: {type: 'Edm.String'},
    serialNumber: {type: 'Edm.String'},
    subscriberCarrier: {type: 'Edm.String'},
    totalStorageSpaceInBytes: {type: 'Edm.Int64', nullable: false},
    userDisplayName: {type: 'Edm.String'},
    userId: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'},
    wiFiMacAddress: {type: 'Edm.String'},
    deviceCompliancePolicyStates: {type: 'graph.deviceCompliancePolicyState', collection: true, navigation: true},
    deviceConfigurationStates: {type: 'graph.deviceConfigurationState', collection: true, navigation: true},
    deviceCategory: {type: 'graph.deviceCategory', navigation: true}
  }
} as EntityConfig<ManagedDevice>;