import { NgModule } from '@angular/core';

//#region ODataApi Imports
import { GraphServiceService } from './microsoft/graph/graphservice.service';
import { InvitationsService } from './microsoft/graph/invitations.service';
import { UsersService } from './microsoft/graph/users.service';
import { IdentityProvidersService } from './microsoft/graph/identityproviders.service';
import { ApplicationsService } from './microsoft/graph/applications.service';
import { CertificateBasedAuthConfigurationService } from './microsoft/graph/certificatebasedauthconfiguration.service';
import { DirectoryObjectsService } from './microsoft/graph/directoryobjects.service';
import { ContactsService } from './microsoft/graph/contacts.service';
import { DevicesService } from './microsoft/graph/devices.service';
import { DomainsService } from './microsoft/graph/domains.service';
import { DomainDnsRecordsService } from './microsoft/graph/domaindnsrecords.service';
import { GroupsService } from './microsoft/graph/groups.service';
import { DirectoryRolesService } from './microsoft/graph/directoryroles.service';
import { DirectoryRoleTemplatesService } from './microsoft/graph/directoryroletemplates.service';
import { OrganizationService } from './microsoft/graph/organization.service';
import { GroupSettingsService } from './microsoft/graph/groupsettings.service';
import { GroupSettingTemplatesService } from './microsoft/graph/groupsettingtemplates.service';
import { SubscribedSkusService } from './microsoft/graph/subscribedskus.service';
import { ContractsService } from './microsoft/graph/contracts.service';
import { ServicePrincipalsService } from './microsoft/graph/serviceprincipals.service';
import { Oauth2PermissionGrantsService } from './microsoft/graph/oauth2permissiongrants.service';
import { WorkbooksService } from './microsoft/graph/workbooks.service';
import { PlacesService } from './microsoft/graph/places.service';
import { DrivesService } from './microsoft/graph/drives.service';
import { SharesService } from './microsoft/graph/shares.service';
import { SitesService } from './microsoft/graph/sites.service';
import { SchemaExtensionsService } from './microsoft/graph/schemaextensions.service';
import { GroupLifecyclePoliciesService } from './microsoft/graph/grouplifecyclepolicies.service';
import { DataPolicyOperationsService } from './microsoft/graph/datapolicyoperations.service';
import { SubscriptionsService } from './microsoft/graph/subscriptions.service';
import { TeamsService } from './microsoft/graph/teams.service';
import { TeamsTemplatesService } from './microsoft/graph/teamstemplates.service';
import { AuditLogsService } from './microsoft/graph/auditlogs.service';
import { IdentityService } from './microsoft/graph/identity.service';
import { PoliciesService } from './microsoft/graph/policies.service';
import { MeService } from './microsoft/graph/me.service';
import { DirectoryService } from './microsoft/graph/directory.service';
import { EducationService } from './microsoft/graph/education.service';
import { DriveService } from './microsoft/graph/drive.service';
import { CommunicationsService } from './microsoft/graph/communications.service';
import { DeviceAppManagementService } from './microsoft/graph/deviceappmanagement.service';
import { DeviceManagementService } from './microsoft/graph/devicemanagement.service';
import { ReportsService } from './microsoft/graph/reports.service';
import { PlannerService } from './microsoft/graph/planner.service';
import { SecurityService } from './microsoft/graph/security.service';
import { TeamworkService } from './microsoft/graph/teamwork.service';
import { AppCatalogsService } from './microsoft/graph/appcatalogs.service';
import { InformationProtectionService } from './microsoft/graph/informationprotection.service';
//#endregion

@NgModule({
  providers: [
    GraphServiceService,
    InvitationsService,
    UsersService,
    IdentityProvidersService,
    ApplicationsService,
    CertificateBasedAuthConfigurationService,
    DirectoryObjectsService,
    ContactsService,
    DevicesService,
    DomainsService,
    DomainDnsRecordsService,
    GroupsService,
    DirectoryRolesService,
    DirectoryRoleTemplatesService,
    OrganizationService,
    GroupSettingsService,
    GroupSettingTemplatesService,
    SubscribedSkusService,
    ContractsService,
    ServicePrincipalsService,
    Oauth2PermissionGrantsService,
    WorkbooksService,
    PlacesService,
    DrivesService,
    SharesService,
    SitesService,
    SchemaExtensionsService,
    GroupLifecyclePoliciesService,
    DataPolicyOperationsService,
    SubscriptionsService,
    TeamsService,
    TeamsTemplatesService,
    AuditLogsService,
    IdentityService,
    PoliciesService,
    MeService,
    DirectoryService,
    EducationService,
    DriveService,
    CommunicationsService,
    DeviceAppManagementService,
    DeviceManagementService,
    ReportsService,
    PlannerService,
    SecurityService,
    TeamworkService,
    AppCatalogsService,
    InformationProtectionService
  ]
})
export class MsGraphModule { }