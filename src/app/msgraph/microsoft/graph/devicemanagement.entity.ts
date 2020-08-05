import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceManagementSubscriptionState } from './devicemanagementsubscriptionstate.enum';
import { DeviceManagementSettings } from './devicemanagementsettings.entity';
import { IntuneBrand } from './intunebrand.entity';
import { ManagedDevice } from './manageddevice.entity';
import { DeviceManagementTroubleshootingEvent } from './devicemanagementtroubleshootingevent.entity';
import { TermsAndConditions } from './termsandconditions.entity';
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { SoftwareUpdateStatusSummary } from './softwareupdatestatussummary.entity';
import { DeviceCompliancePolicyDeviceStateSummary } from './devicecompliancepolicydevicestatesummary.entity';
import { DeviceCompliancePolicySettingStateSummary } from './devicecompliancepolicysettingstatesummary.entity';
import { DeviceConfigurationDeviceStateSummary } from './deviceconfigurationdevicestatesummary.entity';
import { IosUpdateDeviceStatus } from './iosupdatedevicestatus.entity';
import { DeviceCategory } from './devicecategory.entity';
import { DeviceManagementExchangeConnector } from './devicemanagementexchangeconnector.entity';
import { DeviceEnrollmentConfiguration } from './deviceenrollmentconfiguration.entity';
import { OnPremisesConditionalAccessSettings } from './onpremisesconditionalaccesssettings.entity';
import { MobileThreatDefenseConnector } from './mobilethreatdefenseconnector.entity';
import { DeviceManagementPartner } from './devicemanagementpartner.entity';
import { ComplianceManagementPartner } from './compliancemanagementpartner.entity';
import { ApplePushNotificationCertificate } from './applepushnotificationcertificate.entity';
import { ManagedDeviceOverview } from './manageddeviceoverview.entity';
import { DetectedApp } from './detectedapp.entity';
import { NotificationMessageTemplate } from './notificationmessagetemplate.entity';
import { RoleDefinition } from './roledefinition.entity';
import { DeviceAndAppManagementRoleAssignment } from './deviceandappmanagementroleassignment.entity';
import { ResourceOperation } from './resourceoperation.entity';
import { RemoteAssistancePartner } from './remoteassistancepartner.entity';
import { TelecomExpenseManagementPartner } from './telecomexpensemanagementpartner.entity';
import { WindowsInformationProtectionAppLearningSummary } from './windowsinformationprotectionapplearningsummary.entity';
import { WindowsInformationProtectionNetworkLearningSummary } from './windowsinformationprotectionnetworklearningsummary.entity';
//#endregion

export interface DeviceManagement extends Entity {
  //#region ODataApi Properties
  settings?: DeviceManagementSettings;
  intuneAccountId: string;
  intuneBrand?: IntuneBrand;
  subscriptionState: DeviceManagementSubscriptionState;
  termsAndConditions?: TermsAndConditions[];
  deviceConfigurations?: DeviceConfiguration[];
  deviceCompliancePolicies?: DeviceCompliancePolicy[];
  softwareUpdateStatusSummary?: SoftwareUpdateStatusSummary;
  deviceCompliancePolicyDeviceStateSummary?: DeviceCompliancePolicyDeviceStateSummary;
  deviceCompliancePolicySettingStateSummaries?: DeviceCompliancePolicySettingStateSummary[];
  deviceConfigurationDeviceStateSummaries?: DeviceConfigurationDeviceStateSummary;
  iosUpdateStatuses?: IosUpdateDeviceStatus[];
  deviceCategories?: DeviceCategory[];
  exchangeConnectors?: DeviceManagementExchangeConnector[];
  deviceEnrollmentConfigurations?: DeviceEnrollmentConfiguration[];
  conditionalAccessSettings?: OnPremisesConditionalAccessSettings;
  mobileThreatDefenseConnectors?: MobileThreatDefenseConnector[];
  deviceManagementPartners?: DeviceManagementPartner[];
  complianceManagementPartners?: ComplianceManagementPartner[];
  applePushNotificationCertificate?: ApplePushNotificationCertificate;
  managedDeviceOverview?: ManagedDeviceOverview;
  detectedApps?: DetectedApp[];
  managedDevices?: ManagedDevice[];
  notificationMessageTemplates?: NotificationMessageTemplate[];
  roleDefinitions?: RoleDefinition[];
  roleAssignments?: DeviceAndAppManagementRoleAssignment[];
  resourceOperations?: ResourceOperation[];
  remoteAssistancePartners?: RemoteAssistancePartner[];
  telecomExpenseManagementPartners?: TelecomExpenseManagementPartner[];
  troubleshootingEvents?: DeviceManagementTroubleshootingEvent[];
  windowsInformationProtectionAppLearningSummaries?: WindowsInformationProtectionAppLearningSummary[];
  windowsInformationProtectionNetworkLearningSummaries?: WindowsInformationProtectionNetworkLearningSummary[];
  //#endregion
}