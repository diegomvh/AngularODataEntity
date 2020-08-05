import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagement } from './devicemanagement.entity';
//#endregion

export const DeviceManagementConfig = {
  name: "DeviceManagement",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    settings: {type: 'graph.deviceManagementSettings'},
    intuneAccountId: {type: 'Edm.Guid', nullable: false},
    intuneBrand: {type: 'graph.intuneBrand'},
    subscriptionState: {type: 'graph.deviceManagementSubscriptionState', nullable: false},
    termsAndConditions: {type: 'graph.termsAndConditions', collection: true, navigation: true},
    deviceConfigurations: {type: 'graph.deviceConfiguration', collection: true, navigation: true},
    deviceCompliancePolicies: {type: 'graph.deviceCompliancePolicy', collection: true, navigation: true},
    softwareUpdateStatusSummary: {type: 'graph.softwareUpdateStatusSummary', navigation: true},
    deviceCompliancePolicyDeviceStateSummary: {type: 'graph.deviceCompliancePolicyDeviceStateSummary', navigation: true},
    deviceCompliancePolicySettingStateSummaries: {type: 'graph.deviceCompliancePolicySettingStateSummary', collection: true, navigation: true},
    deviceConfigurationDeviceStateSummaries: {type: 'graph.deviceConfigurationDeviceStateSummary', navigation: true},
    iosUpdateStatuses: {type: 'graph.iosUpdateDeviceStatus', collection: true, navigation: true},
    deviceCategories: {type: 'graph.deviceCategory', collection: true, navigation: true},
    exchangeConnectors: {type: 'graph.deviceManagementExchangeConnector', collection: true, navigation: true},
    deviceEnrollmentConfigurations: {type: 'graph.deviceEnrollmentConfiguration', collection: true, navigation: true},
    conditionalAccessSettings: {type: 'graph.onPremisesConditionalAccessSettings', navigation: true},
    mobileThreatDefenseConnectors: {type: 'graph.mobileThreatDefenseConnector', collection: true, navigation: true},
    deviceManagementPartners: {type: 'graph.deviceManagementPartner', collection: true, navigation: true},
    complianceManagementPartners: {type: 'graph.complianceManagementPartner', collection: true, navigation: true},
    applePushNotificationCertificate: {type: 'graph.applePushNotificationCertificate', navigation: true},
    managedDeviceOverview: {type: 'graph.managedDeviceOverview', navigation: true},
    detectedApps: {type: 'graph.detectedApp', collection: true, navigation: true},
    managedDevices: {type: 'graph.managedDevice', collection: true, navigation: true},
    notificationMessageTemplates: {type: 'graph.notificationMessageTemplate', collection: true, navigation: true},
    roleDefinitions: {type: 'graph.roleDefinition', collection: true, navigation: true},
    roleAssignments: {type: 'graph.deviceAndAppManagementRoleAssignment', collection: true, navigation: true},
    resourceOperations: {type: 'graph.resourceOperation', collection: true, navigation: true},
    remoteAssistancePartners: {type: 'graph.remoteAssistancePartner', collection: true, navigation: true},
    telecomExpenseManagementPartners: {type: 'graph.telecomExpenseManagementPartner', collection: true, navigation: true},
    troubleshootingEvents: {type: 'graph.deviceManagementTroubleshootingEvent', collection: true, navigation: true},
    windowsInformationProtectionAppLearningSummaries: {type: 'graph.windowsInformationProtectionAppLearningSummary', collection: true, navigation: true},
    windowsInformationProtectionNetworkLearningSummaries: {type: 'graph.windowsInformationProtectionNetworkLearningSummary', collection: true, navigation: true}
  }
} as EntityConfig<DeviceManagement>;