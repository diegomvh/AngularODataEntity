import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
import { AssignedLicense } from './assignedlicense.entity';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.entity';
import { AssignedLabel } from './assignedlabel.entity';
import { LicenseProcessingState } from './licenseprocessingstate.entity';
import { DirectoryObject } from './directoryobject.entity';
import { User } from './user.entity';
import { AppRoleAssignment } from './approleassignment.entity';
import { Calendar } from './calendar.entity';
import { Event } from './event.entity';
import { ProfilePhoto } from './profilephoto.entity';
import { Drive } from './drive.entity';
import { Site } from './site.entity';
import { Extension } from './extension.entity';
import { Onenote } from './onenote.entity';
import { Team } from './team.entity';
import { Group } from './group.entity';
import { GroupSetting } from './groupsetting.entity';
import { Conversation } from './conversation.entity';
import { ConversationThread } from './conversationthread.entity';
import { GroupLifecyclePolicy } from './grouplifecyclepolicy.entity';
import { PlannerGroup } from './plannergroup.entity';
import { DriveItem } from './driveitem.entity';
import { AssignedLicenseModel } from './assignedlicense.model';
import { OnPremisesProvisioningErrorModel } from './onpremisesprovisioningerror.model';
import { AssignedLabelModel } from './assignedlabel.model';
import { LicenseProcessingStateModel } from './licenseprocessingstate.model';
import { UserModel } from './user.model';
import { AppRoleAssignmentModel } from './approleassignment.model';
import { CalendarModel } from './calendar.model';
import { EventModel } from './event.model';
import { ProfilePhotoModel } from './profilephoto.model';
import { DriveModel } from './drive.model';
import { SiteModel } from './site.model';
import { ExtensionModel } from './extension.model';
import { OnenoteModel } from './onenote.model';
import { TeamModel } from './team.model';
import { GroupSettingModel } from './groupsetting.model';
import { ConversationModel } from './conversation.model';
import { ConversationThreadModel } from './conversationthread.model';
import { GroupLifecyclePolicyModel } from './grouplifecyclepolicy.model';
import { PlannerGroupModel } from './plannergroup.model';
import { DriveItemModel } from './driveitem.model';
import { AssignedLicenseCollection } from './assignedlicense.collection';
import { OnPremisesProvisioningErrorCollection } from './onpremisesprovisioningerror.collection';
import { AssignedLabelCollection } from './assignedlabel.collection';
import { LicenseProcessingStateCollection } from './licenseprocessingstate.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { UserCollection } from './user.collection';
import { AppRoleAssignmentCollection } from './approleassignment.collection';
import { CalendarCollection } from './calendar.collection';
import { EventCollection } from './event.collection';
import { ProfilePhotoCollection } from './profilephoto.collection';
import { DriveCollection } from './drive.collection';
import { SiteCollection } from './site.collection';
import { ExtensionCollection } from './extension.collection';
import { OnenoteCollection } from './onenote.collection';
import { TeamCollection } from './team.collection';
import { GroupCollection } from './group.collection';
import { GroupSettingCollection } from './groupsetting.collection';
import { ConversationCollection } from './conversation.collection';
import { ConversationThreadCollection } from './conversationthread.collection';
import { GroupLifecyclePolicyCollection } from './grouplifecyclepolicy.collection';
import { PlannerGroupCollection } from './plannergroup.collection';
import { DriveItemCollection } from './driveitem.collection';
//#endregion

export class GroupModel<E extends Group> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  assignedLabels?: AssignedLabelCollection<AssignedLabel, AssignedLabelModel<AssignedLabel>>;
  assignedLicenses?: AssignedLicenseCollection<AssignedLicense, AssignedLicenseModel<AssignedLicense>>;
  classification?: string;
  createdDateTime?: Date;
  description?: string;
  displayName?: string;
  expirationDateTime?: Date;
  groupTypes: string[];
  hasMembersWithLicenseErrors?: boolean;
  licenseProcessingState?: LicenseProcessingStateModel<LicenseProcessingState>;
  mail?: string;
  mailEnabled?: boolean;
  mailNickname?: string;
  membershipRule?: string;
  membershipRuleProcessingState?: string;
  onPremisesDomainName?: string;
  onPremisesLastSyncDateTime?: Date;
  onPremisesNetBiosName?: string;
  onPremisesProvisioningErrors?: OnPremisesProvisioningErrorCollection<OnPremisesProvisioningError, OnPremisesProvisioningErrorModel<OnPremisesProvisioningError>>;
  onPremisesSamAccountName?: string;
  onPremisesSecurityIdentifier?: string;
  onPremisesSyncEnabled?: boolean;
  preferredDataLocation?: string;
  preferredLanguage?: string;
  proxyAddresses: string[];
  renewedDateTime?: Date;
  securityEnabled?: boolean;
  securityIdentifier?: string;
  theme?: string;
  visibility?: string;
  allowExternalSenders?: boolean;
  autoSubscribeNewMembers?: boolean;
  hideFromAddressLists?: boolean;
  hideFromOutlookClients?: boolean;
  isSubscribedByMail?: boolean;
  unseenCount?: number;
  isArchived?: boolean;
  appRoleAssignments?: AppRoleAssignmentCollection<AppRoleAssignment, AppRoleAssignmentModel<AppRoleAssignment>>;
  createdOnBehalfOf?: DirectoryObjectModel<DirectoryObject>;
  memberOf?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  members?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  membersWithLicenseErrors?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  owners?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  settings?: GroupSettingCollection<GroupSetting, GroupSettingModel<GroupSetting>>;
  transitiveMemberOf?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  transitiveMembers?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  acceptedSenders?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  calendar?: CalendarModel<Calendar>;
  calendarView?: EventCollection<Event, EventModel<Event>>;
  conversations?: ConversationCollection<Conversation, ConversationModel<Conversation>>;
  events?: EventCollection<Event, EventModel<Event>>;
  photo?: ProfilePhotoModel<ProfilePhoto>;
  photos?: ProfilePhotoCollection<ProfilePhoto, ProfilePhotoModel<ProfilePhoto>>;
  rejectedSenders?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  threads?: ConversationThreadCollection<ConversationThread, ConversationThreadModel<ConversationThread>>;
  drive?: DriveModel<Drive>;
  drives?: DriveCollection<Drive, DriveModel<Drive>>;
  sites?: SiteCollection<Site, SiteModel<Site>>;
  extensions?: ExtensionCollection<Extension, ExtensionModel<Extension>>;
  groupLifecyclePolicies?: GroupLifecyclePolicyCollection<GroupLifecyclePolicy, GroupLifecyclePolicyModel<GroupLifecyclePolicy>>;
  planner?: PlannerGroupModel<PlannerGroup>;
  onenote?: OnenoteModel<Onenote>;
  team?: TeamModel<Team>;
  //#endregion
  //#region ODataApi Actions
  public assignLicense(addLicenses: AssignedLicense[], removeLicenses: string[], options?: HttpOptions): Observable<GroupModel<Group>> {
    var res = this._action<{addLicenses: AssignedLicense[], removeLicenses: string[]}, Group>('microsoft.graph.assignLicense');
    res.segment.entitySet('groups');
    return res.call({addLicenses, removeLicenses}, 'model', options) as Observable<GroupModel<Group>>;
  }
  public validateProperties(displayName: string, mailNickname: string, onBehalfOfUserId: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{displayName: string, mailNickname: string, onBehalfOfUserId: string}, any>('microsoft.graph.validateProperties');
    res.segment.entitySet('groups');
    return res.call({displayName, mailNickname, onBehalfOfUserId}, 'property', options) as Observable<any>;
  }
  public addFavorite(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.addFavorite');
    res.segment.entitySet('groups');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public removeFavorite(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.removeFavorite');
    res.segment.entitySet('groups');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public resetUnseenCount(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.resetUnseenCount');
    res.segment.entitySet('groups');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public subscribeByMail(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.subscribeByMail');
    res.segment.entitySet('groups');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public unsubscribeByMail(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.unsubscribeByMail');
    res.segment.entitySet('groups');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public renew(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.renew');
    res.segment.entitySet('groups');
    return res.call(null, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
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