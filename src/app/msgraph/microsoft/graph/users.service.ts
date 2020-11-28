import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
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
import { ExchangeIdFormat } from './exchangeidformat.enum';
import { MailTipsType } from './mailtipstype.enum';
import { AssignedLicense } from './assignedlicense.complex';
import { AssignedPlan } from './assignedplan.complex';
import { ObjectIdentity } from './objectidentity.complex';
import { LicenseAssignmentState } from './licenseassignmentstate.complex';
import { OnPremisesExtensionAttributes } from './onpremisesextensionattributes.complex';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.complex';
import { PasswordProfile } from './passwordprofile.complex';
import { ProvisionedPlan } from './provisionedplan.complex';
import { MailboxSettings } from './mailboxsettings.complex';
import { AttendeeBase } from './attendeebase.complex';
import { LocationConstraint } from './locationconstraint.complex';
import { MeetingTimeSuggestionsResult } from './meetingtimesuggestionsresult.complex';
import { TimeConstraint } from './timeconstraint.complex';
import { ConvertIdResult } from './convertidresult.complex';
import { MailTips } from './mailtips.complex';
import { ManagedAppDiagnosticStatus } from './managedappdiagnosticstatus.complex';
import { DirectoryObject } from './directoryobject.entity';
import { User } from './user.entity';
import { Message } from './message.entity';
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { AssignedLicenseModel } from './assignedlicense.model';
import { AssignedPlanModel } from './assignedplan.model';
import { ObjectIdentityModel } from './objectidentity.model';
import { LicenseAssignmentStateModel } from './licenseassignmentstate.model';
import { OnPremisesExtensionAttributesModel } from './onpremisesextensionattributes.model';
import { OnPremisesProvisioningErrorModel } from './onpremisesprovisioningerror.model';
import { PasswordProfileModel } from './passwordprofile.model';
import { ProvisionedPlanModel } from './provisionedplan.model';
import { MailboxSettingsModel } from './mailboxsettings.model';
import { AttendeeBaseModel } from './attendeebase.model';
import { LocationConstraintModel } from './locationconstraint.model';
import { MeetingTimeSuggestionsResultModel } from './meetingtimesuggestionsresult.model';
import { TimeConstraintModel } from './timeconstraint.model';
import { ConvertIdResultModel } from './convertidresult.model';
import { MailTipsModel } from './mailtips.model';
import { ManagedAppDiagnosticStatusModel } from './managedappdiagnosticstatus.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { UserModel } from './user.model';
import { MessageModel } from './message.model';
import { ManagedAppPolicyModel } from './managedapppolicy.model';
import { AssignedLicenseCollection } from './assignedlicense.collection';
import { AssignedPlanCollection } from './assignedplan.collection';
import { ObjectIdentityCollection } from './objectidentity.collection';
import { LicenseAssignmentStateCollection } from './licenseassignmentstate.collection';
import { OnPremisesExtensionAttributesCollection } from './onpremisesextensionattributes.collection';
import { OnPremisesProvisioningErrorCollection } from './onpremisesprovisioningerror.collection';
import { PasswordProfileCollection } from './passwordprofile.collection';
import { ProvisionedPlanCollection } from './provisionedplan.collection';
import { MailboxSettingsCollection } from './mailboxsettings.collection';
import { AttendeeBaseCollection } from './attendeebase.collection';
import { LocationConstraintCollection } from './locationconstraint.collection';
import { MeetingTimeSuggestionsResultCollection } from './meetingtimesuggestionsresult.collection';
import { TimeConstraintCollection } from './timeconstraint.collection';
import { ConvertIdResultCollection } from './convertidresult.collection';
import { MailTipsCollection } from './mailtips.collection';
import { ManagedAppDiagnosticStatusCollection } from './managedappdiagnosticstatus.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { UserCollection } from './user.collection';
import { MessageCollection } from './message.collection';
import { ManagedAppPolicyCollection } from './managedapppolicy.collection';
//#endregion

@Injectable()
export class UsersService extends ODataEntityService<User> {
  constructor(protected client: ODataClient) {
    super(client, 'users', 'microsoft.graph.user');
  }

  //#region ODataApi Model
  userModel(): UserModel<User> {
    return this.entity().asModel() as UserModel<User>;
  }
  //#endregion
  //#region ODataApi Collection
  userCollection(): UserCollection<User, UserModel<User>> {
    return this.entities().asCollection() as UserCollection<User, UserModel<User>>;
  }
  //#endregion
  //#region ODataApi Actions
  public assignLicense(entity: EntityKey<User>): ODataActionResource<{addLicenses: AssignedLicense[], removeLicenses: string[]}, User> {
    const resource = this.entity(entity).action<{addLicenses: AssignedLicense[], removeLicenses: string[]}, User>('microsoft.graph.assignLicense');
    return resource;
  }
  public changePassword(entity: EntityKey<User>): ODataActionResource<{currentPassword: string, newPassword: string}, any> {
    const resource = this.entity(entity).action<{currentPassword: string, newPassword: string}, any>('microsoft.graph.changePassword');
    return resource;
  }
  public reprocessLicenseAssignment(entity: EntityKey<User>): ODataActionResource<null, User> {
    const resource = this.entity(entity).action<null, User>('microsoft.graph.reprocessLicenseAssignment');
    return resource;
  }
  public revokeSignInSessions(entity: EntityKey<User>): ODataActionResource<null, boolean> {
    const resource = this.entity(entity).action<null, boolean>('microsoft.graph.revokeSignInSessions');
    return resource;
  }
  public findMeetingTimes(entity: EntityKey<User>): ODataActionResource<{attendees: AttendeeBase[], locationConstraint: LocationConstraint, timeConstraint: TimeConstraint, meetingDuration: Duration, maxCandidates: number, isOrganizerOptional: boolean, returnSuggestionReasons: boolean, minimumAttendeePercentage: number}, MeetingTimeSuggestionsResult> {
    const resource = this.entity(entity).action<{attendees: AttendeeBase[], locationConstraint: LocationConstraint, timeConstraint: TimeConstraint, meetingDuration: Duration, maxCandidates: number, isOrganizerOptional: boolean, returnSuggestionReasons: boolean, minimumAttendeePercentage: number}, MeetingTimeSuggestionsResult>('microsoft.graph.findMeetingTimes');
    return resource;
  }
  public getMailTips(entity: EntityKey<User>): ODataActionResource<{EmailAddresses: string[], MailTipsOptions: MailTipsType}, MailTips> {
    const resource = this.entity(entity).action<{EmailAddresses: string[], MailTipsOptions: MailTipsType}, MailTips>('microsoft.graph.getMailTips');
    return resource;
  }
  public sendMail(entity: EntityKey<User>): ODataActionResource<{Message: Message, SaveToSentItems: boolean}, any> {
    const resource = this.entity(entity).action<{Message: Message, SaveToSentItems: boolean}, any>('microsoft.graph.sendMail');
    return resource;
  }
  public translateExchangeIds(entity: EntityKey<User>): ODataActionResource<{InputIds: string[], TargetIdType: ExchangeIdFormat, SourceIdType: ExchangeIdFormat}, ConvertIdResult> {
    const resource = this.entity(entity).action<{InputIds: string[], TargetIdType: ExchangeIdFormat, SourceIdType: ExchangeIdFormat}, ConvertIdResult>('microsoft.graph.translateExchangeIds');
    return resource;
  }
  public removeAllDevicesFromManagement(entity: EntityKey<User>): ODataActionResource<null, any> {
    const resource = this.entity(entity).action<null, any>('microsoft.graph.removeAllDevicesFromManagement');
    return resource;
  }
  public wipeManagedAppRegistrationsByDeviceTag(entity: EntityKey<User>): ODataActionResource<{deviceTag: string}, any> {
    const resource = this.entity(entity).action<{deviceTag: string}, any>('microsoft.graph.wipeManagedAppRegistrationsByDeviceTag');
    return resource;
  }
  public exportPersonalData(entity: EntityKey<User>): ODataActionResource<{storageLocation: string}, any> {
    const resource = this.entity(entity).action<{storageLocation: string}, any>('microsoft.graph.exportPersonalData');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  public getManagedAppDiagnosticStatuses(entity: EntityKey<User>): ODataFunctionResource<null, ManagedAppDiagnosticStatus> {
    const resource = this.entity(entity).function<null, ManagedAppDiagnosticStatus>('microsoft.graph.getManagedAppDiagnosticStatuses');
    return resource;
  }
  public getManagedAppPolicies(entity: EntityKey<User>): ODataFunctionResource<null, ManagedAppPolicy> {
    const resource = this.entity(entity).function<null, ManagedAppPolicy>('microsoft.graph.getManagedAppPolicies');
    return resource;
  }
  public delta(): ODataFunctionResource<null, User> {
    const resource = this.entities().function<null, User>('microsoft.graph.delta');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public createdObjects(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('createdObjects');
  }
  public directReports(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('directReports');
  }
  public manager(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('manager');
  }
  public memberOf(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('memberOf');
  }
  public ownedDevices(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('ownedDevices');
  }
  public ownedObjects(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('ownedObjects');
  }
  public registeredDevices(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('registeredDevices');
  }
  public transitiveMemberOf(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('transitiveMemberOf');
  }
  //#endregion
}
