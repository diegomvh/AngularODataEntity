import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ManagedDeviceOwnerType } from './manageddeviceownertype.enum';
import { ComplianceState } from './compliancestate.enum';
import { ManagementAgentType } from './managementagenttype.enum';
import { DeviceEnrollmentType } from './deviceenrollmenttype.enum';
import { DeviceRegistrationState } from './deviceregistrationstate.enum';
import { DeviceManagementExchangeAccessState } from './devicemanagementexchangeaccessstate.enum';
import { DeviceManagementExchangeAccessStateReason } from './devicemanagementexchangeaccessstatereason.enum';
import { ManagedDevicePartnerReportedHealthState } from './manageddevicepartnerreportedhealthstate.enum';
import { DeviceActionResult } from './deviceactionresult.entity';
import { ConfigurationManagerClientEnabledFeatures } from './configurationmanagerclientenabledfeatures.entity';
import { DeviceHealthAttestationState } from './devicehealthattestationstate.entity';
import { DeviceCategory } from './devicecategory.entity';
import { DeviceConfigurationState } from './deviceconfigurationstate.entity';
import { DeviceCompliancePolicyState } from './devicecompliancepolicystate.entity';
//#endregion

export interface ManagedDevice extends Entity {
  //#region ODataApi Properties
  userId?: string;
  deviceName?: string;
  managedDeviceOwnerType: ManagedDeviceOwnerType;
  deviceActionResults?: DeviceActionResult[];
  enrolledDateTime: Date;
  lastSyncDateTime: Date;
  operatingSystem?: string;
  complianceState: ComplianceState;
  jailBroken?: string;
  managementAgent: ManagementAgentType;
  osVersion?: string;
  easActivated: boolean;
  easDeviceId?: string;
  easActivationDateTime: Date;
  azureADRegistered?: boolean;
  deviceEnrollmentType: DeviceEnrollmentType;
  activationLockBypassCode?: string;
  emailAddress?: string;
  azureADDeviceId?: string;
  deviceRegistrationState: DeviceRegistrationState;
  deviceCategoryDisplayName?: string;
  isSupervised: boolean;
  exchangeLastSuccessfulSyncDateTime: Date;
  exchangeAccessState: DeviceManagementExchangeAccessState;
  exchangeAccessStateReason: DeviceManagementExchangeAccessStateReason;
  remoteAssistanceSessionUrl?: string;
  remoteAssistanceSessionErrorDetails?: string;
  isEncrypted: boolean;
  userPrincipalName?: string;
  model?: string;
  manufacturer?: string;
  imei?: string;
  complianceGracePeriodExpirationDateTime: Date;
  serialNumber?: string;
  phoneNumber?: string;
  androidSecurityPatchLevel?: string;
  userDisplayName?: string;
  configurationManagerClientEnabledFeatures?: ConfigurationManagerClientEnabledFeatures;
  wiFiMacAddress?: string;
  deviceHealthAttestationState?: DeviceHealthAttestationState;
  subscriberCarrier?: string;
  meid?: string;
  totalStorageSpaceInBytes: number;
  freeStorageSpaceInBytes: number;
  managedDeviceName?: string;
  partnerReportedThreatState: ManagedDevicePartnerReportedHealthState;
  deviceConfigurationStates?: DeviceConfigurationState[];
  deviceCompliancePolicyStates?: DeviceCompliancePolicyState[];
  deviceCategory?: DeviceCategory;
  //#endregion
}