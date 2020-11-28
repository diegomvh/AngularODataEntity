import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
import { ExchangeIdFormat } from './exchangeidformat.enum';
import { MailTipsType } from './mailtipstype.enum';
import { AssignedLicense } from './assignedlicense.entity';
import { AssignedPlan } from './assignedplan.entity';
import { ObjectIdentity } from './objectidentity.entity';
import { LicenseAssignmentState } from './licenseassignmentstate.entity';
import { OnPremisesExtensionAttributes } from './onpremisesextensionattributes.entity';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.entity';
import { PasswordProfile } from './passwordprofile.entity';
import { ProvisionedPlan } from './provisionedplan.entity';
import { MailboxSettings } from './mailboxsettings.entity';
import { AttendeeBase } from './attendeebase.entity';
import { LocationConstraint } from './locationconstraint.entity';
import { MeetingTimeSuggestionsResult } from './meetingtimesuggestionsresult.entity';
import { TimeConstraint } from './timeconstraint.entity';
import { ConvertIdResult } from './convertidresult.entity';
import { MailTips } from './mailtips.entity';
import { ManagedAppDiagnosticStatus } from './managedappdiagnosticstatus.entity';
import { DirectoryObject } from './directoryobject.entity';
import { User } from './user.entity';
import { AppRoleAssignment } from './approleassignment.entity';
import { LicenseDetails } from './licensedetails.entity';
import { OAuth2PermissionGrant } from './oauth2permissiongrant.entity';
import { Calendar } from './calendar.entity';
import { CalendarGroup } from './calendargroup.entity';
import { Event } from './event.entity';
import { ContactFolder } from './contactfolder.entity';
import { Contact } from './contact.entity';
import { InferenceClassification } from './inferenceclassification.entity';
import { MailFolder } from './mailfolder.entity';
import { Message } from './message.entity';
import { OutlookUser } from './outlookuser.entity';
import { Person } from './person.entity';
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
import { DriveItem } from './driveitem.entity';
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
import { AppRoleAssignmentModel } from './approleassignment.model';
import { LicenseDetailsModel } from './licensedetails.model';
import { OAuth2PermissionGrantModel } from './oauth2permissiongrant.model';
import { CalendarModel } from './calendar.model';
import { CalendarGroupModel } from './calendargroup.model';
import { EventModel } from './event.model';
import { ContactFolderModel } from './contactfolder.model';
import { ContactModel } from './contact.model';
import { InferenceClassificationModel } from './inferenceclassification.model';
import { MailFolderModel } from './mailfolder.model';
import { MessageModel } from './message.model';
import { OutlookUserModel } from './outlookuser.model';
import { PersonModel } from './person.model';
import { ProfilePhotoModel } from './profilephoto.model';
import { DriveModel } from './drive.model';
import { SiteModel } from './site.model';
import { ExtensionModel } from './extension.model';
import { ManagedDeviceModel } from './manageddevice.model';
import { ManagedAppRegistrationModel } from './managedappregistration.model';
import { DeviceManagementTroubleshootingEventModel } from './devicemanagementtroubleshootingevent.model';
import { PlannerUserModel } from './planneruser.model';
import { OfficeGraphInsightsModel } from './officegraphinsights.model';
import { UserSettingsModel } from './usersettings.model';
import { OnenoteModel } from './onenote.model';
import { UserActivityModel } from './useractivity.model';
import { OnlineMeetingModel } from './onlinemeeting.model';
import { TeamModel } from './team.model';
import { DriveItemModel } from './driveitem.model';
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
import { AppRoleAssignmentCollection } from './approleassignment.collection';
import { LicenseDetailsCollection } from './licensedetails.collection';
import { OAuth2PermissionGrantCollection } from './oauth2permissiongrant.collection';
import { CalendarCollection } from './calendar.collection';
import { CalendarGroupCollection } from './calendargroup.collection';
import { EventCollection } from './event.collection';
import { ContactFolderCollection } from './contactfolder.collection';
import { ContactCollection } from './contact.collection';
import { InferenceClassificationCollection } from './inferenceclassification.collection';
import { MailFolderCollection } from './mailfolder.collection';
import { MessageCollection } from './message.collection';
import { OutlookUserCollection } from './outlookuser.collection';
import { PersonCollection } from './person.collection';
import { ProfilePhotoCollection } from './profilephoto.collection';
import { DriveCollection } from './drive.collection';
import { SiteCollection } from './site.collection';
import { ExtensionCollection } from './extension.collection';
import { ManagedDeviceCollection } from './manageddevice.collection';
import { ManagedAppRegistrationCollection } from './managedappregistration.collection';
import { DeviceManagementTroubleshootingEventCollection } from './devicemanagementtroubleshootingevent.collection';
import { PlannerUserCollection } from './planneruser.collection';
import { OfficeGraphInsightsCollection } from './officegraphinsights.collection';
import { UserSettingsCollection } from './usersettings.collection';
import { OnenoteCollection } from './onenote.collection';
import { UserActivityCollection } from './useractivity.collection';
import { OnlineMeetingCollection } from './onlinemeeting.collection';
import { TeamCollection } from './team.collection';
import { DriveItemCollection } from './driveitem.collection';
import { ManagedAppPolicyCollection } from './managedapppolicy.collection';
//#endregion

export class UserModel<E extends User> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  accountEnabled?: boolean;
  ageGroup?: string;
  assignedLicenses: AssignedLicenseCollection<AssignedLicense, AssignedLicenseModel<AssignedLicense>>;
  assignedPlans: AssignedPlanCollection<AssignedPlan, AssignedPlanModel<AssignedPlan>>;
  businessPhones: string[];
  city?: string;
  companyName?: string;
  consentProvidedForMinor?: string;
  country?: string;
  createdDateTime?: Date;
  creationType?: string;
  department?: string;
  displayName?: string;
  employeeId?: string;
  externalUserState?: string;
  externalUserStateChangeDateTime?: Date;
  faxNumber?: string;
  givenName?: string;
  identities?: ObjectIdentityCollection<ObjectIdentity, ObjectIdentityModel<ObjectIdentity>>;
  imAddresses?: string[];
  isResourceAccount?: boolean;
  jobTitle?: string;
  lastPasswordChangeDateTime?: Date;
  legalAgeGroupClassification?: string;
  licenseAssignmentStates?: LicenseAssignmentStateCollection<LicenseAssignmentState, LicenseAssignmentStateModel<LicenseAssignmentState>>;
  mail?: string;
  mailNickname?: string;
  mobilePhone?: string;
  officeLocation?: string;
  onPremisesDistinguishedName?: string;
  onPremisesDomainName?: string;
  onPremisesExtensionAttributes?: OnPremisesExtensionAttributesModel<OnPremisesExtensionAttributes>;
  onPremisesImmutableId?: string;
  onPremisesLastSyncDateTime?: Date;
  onPremisesProvisioningErrors?: OnPremisesProvisioningErrorCollection<OnPremisesProvisioningError, OnPremisesProvisioningErrorModel<OnPremisesProvisioningError>>;
  onPremisesSamAccountName?: string;
  onPremisesSecurityIdentifier?: string;
  onPremisesSyncEnabled?: boolean;
  onPremisesUserPrincipalName?: string;
  otherMails: string[];
  passwordPolicies?: string;
  passwordProfile?: PasswordProfileModel<PasswordProfile>;
  postalCode?: string;
  preferredLanguage?: string;
  provisionedPlans: ProvisionedPlanCollection<ProvisionedPlan, ProvisionedPlanModel<ProvisionedPlan>>;
  proxyAddresses: string[];
  showInAddressList?: boolean;
  signInSessionsValidFromDateTime?: Date;
  state?: string;
  streetAddress?: string;
  surname?: string;
  usageLocation?: string;
  userPrincipalName?: string;
  userType?: string;
  mailboxSettings?: MailboxSettingsModel<MailboxSettings>;
  deviceEnrollmentLimit: number;
  aboutMe?: string;
  birthday: Date;
  hireDate: Date;
  interests?: string[];
  mySite?: string;
  pastProjects?: string[];
  preferredName?: string;
  responsibilities?: string[];
  schools?: string[];
  skills?: string[];
  appRoleAssignments?: AppRoleAssignmentCollection<AppRoleAssignment, AppRoleAssignmentModel<AppRoleAssignment>>;
  createdObjects?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  directReports?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  licenseDetails?: LicenseDetailsCollection<LicenseDetails, LicenseDetailsModel<LicenseDetails>>;
  manager?: DirectoryObjectModel<DirectoryObject>;
  memberOf?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  oauth2PermissionGrants?: OAuth2PermissionGrantCollection<OAuth2PermissionGrant, OAuth2PermissionGrantModel<OAuth2PermissionGrant>>;
  ownedDevices?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  ownedObjects?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  registeredDevices?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  transitiveMemberOf?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  calendar?: CalendarModel<Calendar>;
  calendarGroups?: CalendarGroupCollection<CalendarGroup, CalendarGroupModel<CalendarGroup>>;
  calendars?: CalendarCollection<Calendar, CalendarModel<Calendar>>;
  calendarView?: EventCollection<Event, EventModel<Event>>;
  contactFolders?: ContactFolderCollection<ContactFolder, ContactFolderModel<ContactFolder>>;
  contacts?: ContactCollection<Contact, ContactModel<Contact>>;
  events?: EventCollection<Event, EventModel<Event>>;
  inferenceClassification?: InferenceClassificationModel<InferenceClassification>;
  mailFolders?: MailFolderCollection<MailFolder, MailFolderModel<MailFolder>>;
  messages?: MessageCollection<Message, MessageModel<Message>>;
  outlook?: OutlookUserModel<OutlookUser>;
  people?: PersonCollection<Person, PersonModel<Person>>;
  photo?: ProfilePhotoModel<ProfilePhoto>;
  photos?: ProfilePhotoCollection<ProfilePhoto, ProfilePhotoModel<ProfilePhoto>>;
  drive?: DriveModel<Drive>;
  drives?: DriveCollection<Drive, DriveModel<Drive>>;
  followedSites?: SiteCollection<Site, SiteModel<Site>>;
  extensions?: ExtensionCollection<Extension, ExtensionModel<Extension>>;
  managedDevices?: ManagedDeviceCollection<ManagedDevice, ManagedDeviceModel<ManagedDevice>>;
  managedAppRegistrations?: ManagedAppRegistrationCollection<ManagedAppRegistration, ManagedAppRegistrationModel<ManagedAppRegistration>>;
  deviceManagementTroubleshootingEvents?: DeviceManagementTroubleshootingEventCollection<DeviceManagementTroubleshootingEvent, DeviceManagementTroubleshootingEventModel<DeviceManagementTroubleshootingEvent>>;
  planner?: PlannerUserModel<PlannerUser>;
  insights?: OfficeGraphInsightsModel<OfficeGraphInsights>;
  settings?: UserSettingsModel<UserSettings>;
  onenote?: OnenoteModel<Onenote>;
  activities?: UserActivityCollection<UserActivity, UserActivityModel<UserActivity>>;
  onlineMeetings?: OnlineMeetingCollection<OnlineMeeting, OnlineMeetingModel<OnlineMeeting>>;
  joinedTeams?: TeamCollection<Team, TeamModel<Team>>;
  //#endregion
  //#region ODataApi Actions
  public assignLicense(addLicenses: AssignedLicense[], removeLicenses: string[], options?: HttpOptions): Observable<UserModel<User>> {
    var res = this._action<{addLicenses: AssignedLicense[], removeLicenses: string[]}, User>('microsoft.graph.assignLicense');
    res.segment.entitySet('users');
    return res.call({addLicenses, removeLicenses}, 'model', options) as Observable<UserModel<User>>;
  }
  public changePassword(currentPassword: string, newPassword: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{currentPassword: string, newPassword: string}, any>('microsoft.graph.changePassword');
    res.segment.entitySet('users');
    return res.call({currentPassword, newPassword}, 'property', options) as Observable<any>;
  }
  public reprocessLicenseAssignment(options?: HttpOptions): Observable<UserModel<User>> {
    var res = this._action<null, User>('microsoft.graph.reprocessLicenseAssignment');
    res.segment.entitySet('users');
    return res.call(null, 'model', options) as Observable<UserModel<User>>;
  }
  public revokeSignInSessions(options?: HttpOptions): Observable<boolean> {
    var res = this._action<null, boolean>('microsoft.graph.revokeSignInSessions');
    res.segment.entitySet('users');
    return res.call(null, 'property', options) as Observable<boolean>;
  }
  public findMeetingTimes(attendees: AttendeeBase[], locationConstraint: LocationConstraint, timeConstraint: TimeConstraint, meetingDuration: Duration, maxCandidates: number, isOrganizerOptional: boolean, returnSuggestionReasons: boolean, minimumAttendeePercentage: number, options?: HttpOptions): Observable<MeetingTimeSuggestionsResultModel<MeetingTimeSuggestionsResult>> {
    var res = this._action<{attendees: AttendeeBase[], locationConstraint: LocationConstraint, timeConstraint: TimeConstraint, meetingDuration: Duration, maxCandidates: number, isOrganizerOptional: boolean, returnSuggestionReasons: boolean, minimumAttendeePercentage: number}, MeetingTimeSuggestionsResult>('microsoft.graph.findMeetingTimes');
    res.segment.entitySet('users');
    return res.call({attendees, locationConstraint, timeConstraint, meetingDuration, maxCandidates, isOrganizerOptional, returnSuggestionReasons, minimumAttendeePercentage}, 'model', options) as Observable<MeetingTimeSuggestionsResultModel<MeetingTimeSuggestionsResult>>;
  }
  public getMailTips(EmailAddresses: string[], MailTipsOptions: MailTipsType, options?: HttpOptions): Observable<MailTipsCollection<MailTips, MailTipsModel<MailTips>>> {
    var res = this._action<{EmailAddresses: string[], MailTipsOptions: MailTipsType}, MailTips>('microsoft.graph.getMailTips');
    res.segment.entitySet('users');
    return res.call({EmailAddresses, MailTipsOptions}, 'collection', options) as Observable<MailTipsCollection<MailTips, MailTipsModel<MailTips>>>;
  }
  public sendMail(Message: Message, SaveToSentItems: boolean, options?: HttpOptions): Observable<any> {
    var res = this._action<{Message: Message, SaveToSentItems: boolean}, any>('microsoft.graph.sendMail');
    res.segment.entitySet('users');
    return res.call({Message, SaveToSentItems}, 'property', options) as Observable<any>;
  }
  public translateExchangeIds(InputIds: string[], TargetIdType: ExchangeIdFormat, SourceIdType: ExchangeIdFormat, options?: HttpOptions): Observable<ConvertIdResultCollection<ConvertIdResult, ConvertIdResultModel<ConvertIdResult>>> {
    var res = this._action<{InputIds: string[], TargetIdType: ExchangeIdFormat, SourceIdType: ExchangeIdFormat}, ConvertIdResult>('microsoft.graph.translateExchangeIds');
    res.segment.entitySet('users');
    return res.call({InputIds, TargetIdType, SourceIdType}, 'collection', options) as Observable<ConvertIdResultCollection<ConvertIdResult, ConvertIdResultModel<ConvertIdResult>>>;
  }
  public removeAllDevicesFromManagement(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.removeAllDevicesFromManagement');
    res.segment.entitySet('users');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public wipeManagedAppRegistrationsByDeviceTag(deviceTag: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{deviceTag: string}, any>('microsoft.graph.wipeManagedAppRegistrationsByDeviceTag');
    res.segment.entitySet('users');
    return res.call({deviceTag}, 'property', options) as Observable<any>;
  }
  public exportPersonalData(storageLocation: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{storageLocation: string}, any>('microsoft.graph.exportPersonalData');
    res.segment.entitySet('users');
    return res.call({storageLocation}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  public getManagedAppDiagnosticStatuses(options?: HttpOptions): Observable<ManagedAppDiagnosticStatusCollection<ManagedAppDiagnosticStatus, ManagedAppDiagnosticStatusModel<ManagedAppDiagnosticStatus>>> {
    var res = this._function<null, ManagedAppDiagnosticStatus>('microsoft.graph.getManagedAppDiagnosticStatuses');
    res.segment.entitySet('users');
    return res.call(null, 'collection', options) as Observable<ManagedAppDiagnosticStatusCollection<ManagedAppDiagnosticStatus, ManagedAppDiagnosticStatusModel<ManagedAppDiagnosticStatus>>>;
  }
  public getManagedAppPolicies(options?: HttpOptions): Observable<ManagedAppPolicyCollection<ManagedAppPolicy, ManagedAppPolicyModel<ManagedAppPolicy>>> {
    var res = this._function<null, ManagedAppPolicy>('microsoft.graph.getManagedAppPolicies');
    res.segment.entitySet('users');
    return res.call(null, 'collection', options) as Observable<ManagedAppPolicyCollection<ManagedAppPolicy, ManagedAppPolicyModel<ManagedAppPolicy>>>;
  }
  //#endregion
  //#region ODataApi Navigations
  public createdByUser() {
    return this._navigationProperty<User>('drive/items/createdByUser').asModel() as ODataModel<User>;
  }
  public lastModifiedByUser() {
    return this._navigationProperty<User>('drive/items/lastModifiedByUser').asModel() as ODataModel<User>;
  }
  //#endregion
}