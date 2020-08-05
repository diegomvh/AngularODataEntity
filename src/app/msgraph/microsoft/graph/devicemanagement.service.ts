import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementSubscriptionState } from './devicemanagementsubscriptionstate.enum';
import { DeviceManagementSettings } from './devicemanagementsettings.entity';
import { IntuneBrand } from './intunebrand.entity';
import { ManagedDevice } from './manageddevice.entity';
import { DeviceManagementTroubleshootingEvent } from './devicemanagementtroubleshootingevent.entity';
import { DeviceManagement } from './devicemanagement.entity';
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

@Injectable()
export class DeviceManagementService extends ODataService<DeviceManagement> {
  constructor(protected client: ODataClient) {
    super(client, 'deviceManagement', 'microsoft.graph.deviceManagement');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}