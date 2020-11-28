import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceManagementSubscriptionState } from './devicemanagementsubscriptionstate.enum';
import { DeviceManagementSettings } from './devicemanagementsettings.entity';
import { IntuneBrand } from './intunebrand.entity';
import { RolePermission } from './rolepermission.entity';
import { ManagedDevice } from './manageddevice.entity';
import { DeviceManagementTroubleshootingEvent } from './devicemanagementtroubleshootingevent.entity';
import { DeviceManagement } from './devicemanagement.entity';
import { TermsAndConditions } from './termsandconditions.entity';
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { DeviceCompliancePolicyDeviceStateSummary } from './devicecompliancepolicydevicestatesummary.entity';
import { DeviceCompliancePolicySettingStateSummary } from './devicecompliancepolicysettingstatesummary.entity';
import { DeviceConfigurationDeviceStateSummary } from './deviceconfigurationdevicestatesummary.entity';
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { IosUpdateDeviceStatus } from './iosupdatedevicestatus.entity';
import { SoftwareUpdateStatusSummary } from './softwareupdatestatussummary.entity';
import { ComplianceManagementPartner } from './compliancemanagementpartner.entity';
import { OnPremisesConditionalAccessSettings } from './onpremisesconditionalaccesssettings.entity';
import { DeviceCategory } from './devicecategory.entity';
import { DeviceEnrollmentConfiguration } from './deviceenrollmentconfiguration.entity';
import { DeviceManagementPartner } from './devicemanagementpartner.entity';
import { DeviceManagementExchangeConnector } from './devicemanagementexchangeconnector.entity';
import { MobileThreatDefenseConnector } from './mobilethreatdefenseconnector.entity';
import { ApplePushNotificationCertificate } from './applepushnotificationcertificate.entity';
import { DetectedApp } from './detectedapp.entity';
import { ManagedDeviceOverview } from './manageddeviceoverview.entity';
import { NotificationMessageTemplate } from './notificationmessagetemplate.entity';
import { ResourceOperation } from './resourceoperation.entity';
import { DeviceAndAppManagementRoleAssignment } from './deviceandappmanagementroleassignment.entity';
import { RoleDefinition } from './roledefinition.entity';
import { RemoteAssistancePartner } from './remoteassistancepartner.entity';
import { TelecomExpenseManagementPartner } from './telecomexpensemanagementpartner.entity';
import { WindowsInformationProtectionAppLearningSummary } from './windowsinformationprotectionapplearningsummary.entity';
import { WindowsInformationProtectionNetworkLearningSummary } from './windowsinformationprotectionnetworklearningsummary.entity';
import { DeviceManagementSettingsModel } from './devicemanagementsettings.model';
import { IntuneBrandModel } from './intunebrand.model';
import { RolePermissionModel } from './rolepermission.model';
import { ManagedDeviceModel } from './manageddevice.model';
import { DeviceManagementTroubleshootingEventModel } from './devicemanagementtroubleshootingevent.model';
import { TermsAndConditionsModel } from './termsandconditions.model';
import { DeviceCompliancePolicyModel } from './devicecompliancepolicy.model';
import { DeviceCompliancePolicyDeviceStateSummaryModel } from './devicecompliancepolicydevicestatesummary.model';
import { DeviceCompliancePolicySettingStateSummaryModel } from './devicecompliancepolicysettingstatesummary.model';
import { DeviceConfigurationDeviceStateSummaryModel } from './deviceconfigurationdevicestatesummary.model';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { IosUpdateDeviceStatusModel } from './iosupdatedevicestatus.model';
import { SoftwareUpdateStatusSummaryModel } from './softwareupdatestatussummary.model';
import { ComplianceManagementPartnerModel } from './compliancemanagementpartner.model';
import { OnPremisesConditionalAccessSettingsModel } from './onpremisesconditionalaccesssettings.model';
import { DeviceCategoryModel } from './devicecategory.model';
import { DeviceEnrollmentConfigurationModel } from './deviceenrollmentconfiguration.model';
import { DeviceManagementPartnerModel } from './devicemanagementpartner.model';
import { DeviceManagementExchangeConnectorModel } from './devicemanagementexchangeconnector.model';
import { MobileThreatDefenseConnectorModel } from './mobilethreatdefenseconnector.model';
import { ApplePushNotificationCertificateModel } from './applepushnotificationcertificate.model';
import { DetectedAppModel } from './detectedapp.model';
import { ManagedDeviceOverviewModel } from './manageddeviceoverview.model';
import { NotificationMessageTemplateModel } from './notificationmessagetemplate.model';
import { ResourceOperationModel } from './resourceoperation.model';
import { DeviceAndAppManagementRoleAssignmentModel } from './deviceandappmanagementroleassignment.model';
import { RoleDefinitionModel } from './roledefinition.model';
import { RemoteAssistancePartnerModel } from './remoteassistancepartner.model';
import { TelecomExpenseManagementPartnerModel } from './telecomexpensemanagementpartner.model';
import { WindowsInformationProtectionAppLearningSummaryModel } from './windowsinformationprotectionapplearningsummary.model';
import { WindowsInformationProtectionNetworkLearningSummaryModel } from './windowsinformationprotectionnetworklearningsummary.model';
import { DeviceManagementSettingsCollection } from './devicemanagementsettings.collection';
import { IntuneBrandCollection } from './intunebrand.collection';
import { RolePermissionCollection } from './rolepermission.collection';
import { ManagedDeviceCollection } from './manageddevice.collection';
import { DeviceManagementTroubleshootingEventCollection } from './devicemanagementtroubleshootingevent.collection';
import { DeviceManagementCollection } from './devicemanagement.collection';
import { TermsAndConditionsCollection } from './termsandconditions.collection';
import { DeviceCompliancePolicyCollection } from './devicecompliancepolicy.collection';
import { DeviceCompliancePolicyDeviceStateSummaryCollection } from './devicecompliancepolicydevicestatesummary.collection';
import { DeviceCompliancePolicySettingStateSummaryCollection } from './devicecompliancepolicysettingstatesummary.collection';
import { DeviceConfigurationDeviceStateSummaryCollection } from './deviceconfigurationdevicestatesummary.collection';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { IosUpdateDeviceStatusCollection } from './iosupdatedevicestatus.collection';
import { SoftwareUpdateStatusSummaryCollection } from './softwareupdatestatussummary.collection';
import { ComplianceManagementPartnerCollection } from './compliancemanagementpartner.collection';
import { OnPremisesConditionalAccessSettingsCollection } from './onpremisesconditionalaccesssettings.collection';
import { DeviceCategoryCollection } from './devicecategory.collection';
import { DeviceEnrollmentConfigurationCollection } from './deviceenrollmentconfiguration.collection';
import { DeviceManagementPartnerCollection } from './devicemanagementpartner.collection';
import { DeviceManagementExchangeConnectorCollection } from './devicemanagementexchangeconnector.collection';
import { MobileThreatDefenseConnectorCollection } from './mobilethreatdefenseconnector.collection';
import { ApplePushNotificationCertificateCollection } from './applepushnotificationcertificate.collection';
import { DetectedAppCollection } from './detectedapp.collection';
import { ManagedDeviceOverviewCollection } from './manageddeviceoverview.collection';
import { NotificationMessageTemplateCollection } from './notificationmessagetemplate.collection';
import { ResourceOperationCollection } from './resourceoperation.collection';
import { DeviceAndAppManagementRoleAssignmentCollection } from './deviceandappmanagementroleassignment.collection';
import { RoleDefinitionCollection } from './roledefinition.collection';
import { RemoteAssistancePartnerCollection } from './remoteassistancepartner.collection';
import { TelecomExpenseManagementPartnerCollection } from './telecomexpensemanagementpartner.collection';
import { WindowsInformationProtectionAppLearningSummaryCollection } from './windowsinformationprotectionapplearningsummary.collection';
import { WindowsInformationProtectionNetworkLearningSummaryCollection } from './windowsinformationprotectionnetworklearningsummary.collection';
//#endregion

export class DeviceManagementModel<E extends DeviceManagement> extends EntityModel<E> {
  //#region ODataApi Properties
  intuneAccountId: string;
  settings?: DeviceManagementSettingsModel<DeviceManagementSettings>;
  intuneBrand?: IntuneBrandModel<IntuneBrand>;
  subscriptionState: DeviceManagementSubscriptionState;
  termsAndConditions?: TermsAndConditionsCollection<TermsAndConditions, TermsAndConditionsModel<TermsAndConditions>>;
  deviceCompliancePolicies?: DeviceCompliancePolicyCollection<DeviceCompliancePolicy, DeviceCompliancePolicyModel<DeviceCompliancePolicy>>;
  deviceCompliancePolicyDeviceStateSummary?: DeviceCompliancePolicyDeviceStateSummaryModel<DeviceCompliancePolicyDeviceStateSummary>;
  deviceCompliancePolicySettingStateSummaries?: DeviceCompliancePolicySettingStateSummaryCollection<DeviceCompliancePolicySettingStateSummary, DeviceCompliancePolicySettingStateSummaryModel<DeviceCompliancePolicySettingStateSummary>>;
  deviceConfigurationDeviceStateSummaries?: DeviceConfigurationDeviceStateSummaryModel<DeviceConfigurationDeviceStateSummary>;
  deviceConfigurations?: DeviceConfigurationCollection<DeviceConfiguration, DeviceConfigurationModel<DeviceConfiguration>>;
  iosUpdateStatuses?: IosUpdateDeviceStatusCollection<IosUpdateDeviceStatus, IosUpdateDeviceStatusModel<IosUpdateDeviceStatus>>;
  softwareUpdateStatusSummary?: SoftwareUpdateStatusSummaryModel<SoftwareUpdateStatusSummary>;
  complianceManagementPartners?: ComplianceManagementPartnerCollection<ComplianceManagementPartner, ComplianceManagementPartnerModel<ComplianceManagementPartner>>;
  conditionalAccessSettings?: OnPremisesConditionalAccessSettingsModel<OnPremisesConditionalAccessSettings>;
  deviceCategories?: DeviceCategoryCollection<DeviceCategory, DeviceCategoryModel<DeviceCategory>>;
  deviceEnrollmentConfigurations?: DeviceEnrollmentConfigurationCollection<DeviceEnrollmentConfiguration, DeviceEnrollmentConfigurationModel<DeviceEnrollmentConfiguration>>;
  deviceManagementPartners?: DeviceManagementPartnerCollection<DeviceManagementPartner, DeviceManagementPartnerModel<DeviceManagementPartner>>;
  exchangeConnectors?: DeviceManagementExchangeConnectorCollection<DeviceManagementExchangeConnector, DeviceManagementExchangeConnectorModel<DeviceManagementExchangeConnector>>;
  mobileThreatDefenseConnectors?: MobileThreatDefenseConnectorCollection<MobileThreatDefenseConnector, MobileThreatDefenseConnectorModel<MobileThreatDefenseConnector>>;
  applePushNotificationCertificate?: ApplePushNotificationCertificateModel<ApplePushNotificationCertificate>;
  detectedApps?: DetectedAppCollection<DetectedApp, DetectedAppModel<DetectedApp>>;
  managedDeviceOverview?: ManagedDeviceOverviewModel<ManagedDeviceOverview>;
  managedDevices?: ManagedDeviceCollection<ManagedDevice, ManagedDeviceModel<ManagedDevice>>;
  notificationMessageTemplates?: NotificationMessageTemplateCollection<NotificationMessageTemplate, NotificationMessageTemplateModel<NotificationMessageTemplate>>;
  resourceOperations?: ResourceOperationCollection<ResourceOperation, ResourceOperationModel<ResourceOperation>>;
  roleAssignments?: DeviceAndAppManagementRoleAssignmentCollection<DeviceAndAppManagementRoleAssignment, DeviceAndAppManagementRoleAssignmentModel<DeviceAndAppManagementRoleAssignment>>;
  roleDefinitions?: RoleDefinitionCollection<RoleDefinition, RoleDefinitionModel<RoleDefinition>>;
  remoteAssistancePartners?: RemoteAssistancePartnerCollection<RemoteAssistancePartner, RemoteAssistancePartnerModel<RemoteAssistancePartner>>;
  telecomExpenseManagementPartners?: TelecomExpenseManagementPartnerCollection<TelecomExpenseManagementPartner, TelecomExpenseManagementPartnerModel<TelecomExpenseManagementPartner>>;
  troubleshootingEvents?: DeviceManagementTroubleshootingEventCollection<DeviceManagementTroubleshootingEvent, DeviceManagementTroubleshootingEventModel<DeviceManagementTroubleshootingEvent>>;
  windowsInformationProtectionAppLearningSummaries?: WindowsInformationProtectionAppLearningSummaryCollection<WindowsInformationProtectionAppLearningSummary, WindowsInformationProtectionAppLearningSummaryModel<WindowsInformationProtectionAppLearningSummary>>;
  windowsInformationProtectionNetworkLearningSummaries?: WindowsInformationProtectionNetworkLearningSummaryCollection<WindowsInformationProtectionNetworkLearningSummary, WindowsInformationProtectionNetworkLearningSummaryModel<WindowsInformationProtectionNetworkLearningSummary>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public verifyWindowsEnrollmentAutoDiscovery(domainName: string, options?: HttpOptions): Observable<boolean> {
    var res = this._function<{domainName: string}, boolean>('microsoft.graph.verifyWindowsEnrollmentAutoDiscovery');
    res.segment.entitySet('');
    return res.call({domainName}, 'property', options) as Observable<boolean>;
  }
  public getEffectivePermissions(scope: string, options?: HttpOptions): Observable<RolePermissionCollection<RolePermission, RolePermissionModel<RolePermission>>> {
    var res = this._function<{scope: string}, RolePermission>('microsoft.graph.getEffectivePermissions');
    res.segment.entitySet('');
    return res.call({scope}, 'collection', options) as Observable<RolePermissionCollection<RolePermission, RolePermissionModel<RolePermission>>>;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}