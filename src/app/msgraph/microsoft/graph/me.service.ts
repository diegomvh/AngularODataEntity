import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
  ODataSingletonEntity, 
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
import { AssignedLicense } from './assignedlicense.entity';
import { AssignedPlan } from './assignedplan.entity';
import { ObjectIdentity } from './objectidentity.entity';
import { LicenseAssignmentState } from './licenseassignmentstate.entity';
import { OnPremisesExtensionAttributes } from './onpremisesextensionattributes.entity';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.entity';
import { PasswordProfile } from './passwordprofile.entity';
import { ProvisionedPlan } from './provisionedplan.entity';
import { MailboxSettings } from './mailboxsettings.entity';
import { DirectoryObject } from './directoryobject.entity';
import { User } from './user.entity';
import { AppRoleAssignment } from './approleassignment.entity';
import { OAuth2PermissionGrant } from './oauth2permissiongrant.entity';
import { LicenseDetails } from './licensedetails.entity';
import { OutlookUser } from './outlookuser.entity';
import { Message } from './message.entity';
import { MailFolder } from './mailfolder.entity';
import { Calendar } from './calendar.entity';
import { CalendarGroup } from './calendargroup.entity';
import { Event } from './event.entity';
import { Person } from './person.entity';
import { Contact } from './contact.entity';
import { ContactFolder } from './contactfolder.entity';
import { InferenceClassification } from './inferenceclassification.entity';
import { ProfilePhoto } from './profilephoto.entity';
import { Drive } from './drive.entity';
import { Site } from './site.entity';
import { Extension } from './extension.entity';
import { ManagedDevice } from './manageddevice.entity';
import { ManagedAppRegistration } from './managedappregistration.entity';
import { DeviceManagementTroubleshootingEvent } from './devicemanagementtroubleshootingevent.entity';
import { PlannerUser } from './planneruser.entity';
import { OfficeGraphInsights } from './officegraphinsights.entity';
import { UserSettings } from './usersettings.entity';
import { Onenote } from './onenote.entity';
import { UserActivity } from './useractivity.entity';
import { OnlineMeeting } from './onlinemeeting.entity';
import { Team } from './team.entity';
//#endregion

@Injectable()
export class MeService extends ODataSingletonService<User> {
  constructor(protected client: ODataClient) {
    super(client, 'me', 'microsoft.graph.user');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}