import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ComplianceState } from './compliancestate.enum';
import { DeviceEnrollmentType } from './deviceenrollmenttype.enum';
import { DeviceManagementExchangeAccessState } from './devicemanagementexchangeaccessstate.enum';
import { DeviceManagementExchangeAccessStateReason } from './devicemanagementexchangeaccessstatereason.enum';
import { DeviceRegistrationState } from './deviceregistrationstate.enum';
import { ManagedDeviceOwnerType } from './manageddeviceownertype.enum';
import { ManagedDevicePartnerReportedHealthState } from './manageddevicepartnerreportedhealthstate.enum';
import { ManagementAgentType } from './managementagenttype.enum';
import { ConfigurationManagerClientEnabledFeatures } from './configurationmanagerclientenabledfeatures.complex';
import { DeviceActionResult } from './deviceactionresult.complex';
import { DeviceHealthAttestationState } from './devicehealthattestationstate.complex';
import { DeviceCategory } from './devicecategory.entity';
import { DeviceCompliancePolicyState } from './devicecompliancepolicystate.entity';
import { DeviceConfigurationState } from './deviceconfigurationstate.entity';
import { ConfigurationManagerClientEnabledFeaturesModel } from './configurationmanagerclientenabledfeatures.model';
import { DeviceActionResultModel } from './deviceactionresult.model';
import { DeviceHealthAttestationStateModel } from './devicehealthattestationstate.model';
import { EntityModel } from './entity.model';
import { DeviceCategoryModel } from './devicecategory.model';
import { DeviceCompliancePolicyStateModel } from './devicecompliancepolicystate.model';
import { DeviceConfigurationStateModel } from './deviceconfigurationstate.model';
import { ConfigurationManagerClientEnabledFeaturesCollection } from './configurationmanagerclientenabledfeatures.collection';
import { DeviceActionResultCollection } from './deviceactionresult.collection';
import { DeviceHealthAttestationStateCollection } from './devicehealthattestationstate.collection';
import { EntityCollection } from './entity.collection';
import { DeviceCategoryCollection } from './devicecategory.collection';
import { DeviceCompliancePolicyStateCollection } from './devicecompliancepolicystate.collection';
import { DeviceConfigurationStateCollection } from './deviceconfigurationstate.collection';
//#endregion

export interface ManagedDevice extends Entity {
  //#region ODataApi Properties
  activationLockBypassCode?: string;
  androidSecurityPatchLevel?: string;
  azureADDeviceId?: string;
  azureADRegistered?: boolean;
  complianceGracePeriodExpirationDateTime: Date;
  complianceState: ComplianceState;
  configurationManagerClientEnabledFeatures?: ConfigurationManagerClientEnabledFeatures;
  deviceActionResults?: DeviceActionResult[];
  deviceCategoryDisplayName?: string;
  deviceEnrollmentType: DeviceEnrollmentType;
  deviceHealthAttestationState?: DeviceHealthAttestationState;
  deviceName?: string;
  deviceRegistrationState: DeviceRegistrationState;
  easActivated: boolean;
  easActivationDateTime: Date;
  easDeviceId?: string;
  emailAddress?: string;
  enrolledDateTime: Date;
  exchangeAccessState: DeviceManagementExchangeAccessState;
  exchangeAccessStateReason: DeviceManagementExchangeAccessStateReason;
  exchangeLastSuccessfulSyncDateTime: Date;
  freeStorageSpaceInBytes: number;
  imei?: string;
  isEncrypted: boolean;
  isSupervised: boolean;
  jailBroken?: string;
  lastSyncDateTime: Date;
  managedDeviceName?: string;
  managedDeviceOwnerType: ManagedDeviceOwnerType;
  managementAgent: ManagementAgentType;
  manufacturer?: string;
  meid?: string;
  model?: string;
  operatingSystem?: string;
  osVersion?: string;
  partnerReportedThreatState: ManagedDevicePartnerReportedHealthState;
  phoneNumber?: string;
  remoteAssistanceSessionErrorDetails?: string;
  remoteAssistanceSessionUrl?: string;
  serialNumber?: string;
  subscriberCarrier?: string;
  totalStorageSpaceInBytes: number;
  userDisplayName?: string;
  userId?: string;
  userPrincipalName?: string;
  wiFiMacAddress?: string;
  deviceCompliancePolicyStates?: DeviceCompliancePolicyState[];
  deviceConfigurationStates?: DeviceConfigurationState[];
  deviceCategory?: DeviceCategory;
  //#endregion
}