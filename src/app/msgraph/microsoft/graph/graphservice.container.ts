import { ContainerConfig } from 'angular-odata';

//#region ODataApi Imports
import { InvitationsServiceConfig } from './invitations.service.config';
import { UsersServiceConfig } from './users.service.config';
import { IdentityProvidersServiceConfig } from './identityproviders.service.config';
import { ApplicationsServiceConfig } from './applications.service.config';
import { CertificateBasedAuthConfigurationServiceConfig } from './certificatebasedauthconfiguration.service.config';
import { ContactsServiceConfig } from './contacts.service.config';
import { ContractsServiceConfig } from './contracts.service.config';
import { DevicesServiceConfig } from './devices.service.config';
import { DirectoryObjectsServiceConfig } from './directoryobjects.service.config';
import { DirectoryRolesServiceConfig } from './directoryroles.service.config';
import { DirectoryRoleTemplatesServiceConfig } from './directoryroletemplates.service.config';
import { DomainDnsRecordsServiceConfig } from './domaindnsrecords.service.config';
import { DomainsServiceConfig } from './domains.service.config';
import { GroupsServiceConfig } from './groups.service.config';
import { GroupSettingsServiceConfig } from './groupsettings.service.config';
import { GroupSettingTemplatesServiceConfig } from './groupsettingtemplates.service.config';
import { Oauth2PermissionGrantsServiceConfig } from './oauth2permissiongrants.service.config';
import { OrganizationServiceConfig } from './organization.service.config';
import { ServicePrincipalsServiceConfig } from './serviceprincipals.service.config';
import { SubscribedSkusServiceConfig } from './subscribedskus.service.config';
import { WorkbooksServiceConfig } from './workbooks.service.config';
import { PlacesServiceConfig } from './places.service.config';
import { DrivesServiceConfig } from './drives.service.config';
import { SharesServiceConfig } from './shares.service.config';
import { SitesServiceConfig } from './sites.service.config';
import { SchemaExtensionsServiceConfig } from './schemaextensions.service.config';
import { GroupLifecyclePoliciesServiceConfig } from './grouplifecyclepolicies.service.config';
import { DataPolicyOperationsServiceConfig } from './datapolicyoperations.service.config';
import { SubscriptionsServiceConfig } from './subscriptions.service.config';
import { TeamsServiceConfig } from './teams.service.config';
import { TeamsTemplatesServiceConfig } from './teamstemplates.service.config';
import { AuditLogsServiceConfig } from './auditlogs.service.config';
import { IdentityServiceConfig } from './identity.service.config';
import { DirectoryServiceConfig } from './directory.service.config';
import { MeServiceConfig } from './me.service.config';
import { PoliciesServiceConfig } from './policies.service.config';
import { EducationServiceConfig } from './education.service.config';
import { DriveServiceConfig } from './drive.service.config';
import { CommunicationsServiceConfig } from './communications.service.config';
import { DeviceAppManagementServiceConfig } from './deviceappmanagement.service.config';
import { DeviceManagementServiceConfig } from './devicemanagement.service.config';
import { ReportsServiceConfig } from './reports.service.config';
import { PlannerServiceConfig } from './planner.service.config';
import { SecurityServiceConfig } from './security.service.config';
import { AppCatalogsServiceConfig } from './appcatalogs.service.config';
import { TeamworkServiceConfig } from './teamwork.service.config';
import { InformationProtectionServiceConfig } from './informationprotection.service.config';
//#endregion

export const GraphServiceContainer = {
  name: "GraphService",
  annotations: [],
  services: [
    InvitationsServiceConfig,
    UsersServiceConfig,
    IdentityProvidersServiceConfig,
    ApplicationsServiceConfig,
    CertificateBasedAuthConfigurationServiceConfig,
    ContactsServiceConfig,
    ContractsServiceConfig,
    DevicesServiceConfig,
    DirectoryObjectsServiceConfig,
    DirectoryRolesServiceConfig,
    DirectoryRoleTemplatesServiceConfig,
    DomainDnsRecordsServiceConfig,
    DomainsServiceConfig,
    GroupsServiceConfig,
    GroupSettingsServiceConfig,
    GroupSettingTemplatesServiceConfig,
    Oauth2PermissionGrantsServiceConfig,
    OrganizationServiceConfig,
    ServicePrincipalsServiceConfig,
    SubscribedSkusServiceConfig,
    WorkbooksServiceConfig,
    PlacesServiceConfig,
    DrivesServiceConfig,
    SharesServiceConfig,
    SitesServiceConfig,
    SchemaExtensionsServiceConfig,
    GroupLifecyclePoliciesServiceConfig,
    DataPolicyOperationsServiceConfig,
    SubscriptionsServiceConfig,
    TeamsServiceConfig,
    TeamsTemplatesServiceConfig,
    AuditLogsServiceConfig,
    IdentityServiceConfig,
    DirectoryServiceConfig,
    MeServiceConfig,
    PoliciesServiceConfig,
    EducationServiceConfig,
    DriveServiceConfig,
    CommunicationsServiceConfig,
    DeviceAppManagementServiceConfig,
    DeviceManagementServiceConfig,
    ReportsServiceConfig,
    PlannerServiceConfig,
    SecurityServiceConfig,
    AppCatalogsServiceConfig,
    TeamworkServiceConfig,
    InformationProtectionServiceConfig
  ]
} as ContainerConfig;