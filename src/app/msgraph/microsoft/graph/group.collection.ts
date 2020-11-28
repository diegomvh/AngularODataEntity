import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { AssignedLicense } from './assignedlicense.entity';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.entity';
import { AssignedLabel } from './assignedlabel.entity';
import { LicenseProcessingState } from './licenseprocessingstate.entity';
import { DirectoryObject } from './directoryobject.entity';
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
import { AssignedLicenseModel } from './assignedlicense.model';
import { OnPremisesProvisioningErrorModel } from './onpremisesprovisioningerror.model';
import { AssignedLabelModel } from './assignedlabel.model';
import { LicenseProcessingStateModel } from './licenseprocessingstate.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { AppRoleAssignmentModel } from './approleassignment.model';
import { CalendarModel } from './calendar.model';
import { EventModel } from './event.model';
import { ProfilePhotoModel } from './profilephoto.model';
import { DriveModel } from './drive.model';
import { SiteModel } from './site.model';
import { ExtensionModel } from './extension.model';
import { OnenoteModel } from './onenote.model';
import { TeamModel } from './team.model';
import { GroupModel } from './group.model';
import { GroupSettingModel } from './groupsetting.model';
import { ConversationModel } from './conversation.model';
import { ConversationThreadModel } from './conversationthread.model';
import { GroupLifecyclePolicyModel } from './grouplifecyclepolicy.model';
import { PlannerGroupModel } from './plannergroup.model';
import { AssignedLicenseCollection } from './assignedlicense.collection';
import { OnPremisesProvisioningErrorCollection } from './onpremisesprovisioningerror.collection';
import { AssignedLabelCollection } from './assignedlabel.collection';
import { LicenseProcessingStateCollection } from './licenseprocessingstate.collection';
import { AppRoleAssignmentCollection } from './approleassignment.collection';
import { CalendarCollection } from './calendar.collection';
import { EventCollection } from './event.collection';
import { ProfilePhotoCollection } from './profilephoto.collection';
import { DriveCollection } from './drive.collection';
import { SiteCollection } from './site.collection';
import { ExtensionCollection } from './extension.collection';
import { OnenoteCollection } from './onenote.collection';
import { TeamCollection } from './team.collection';
import { GroupSettingCollection } from './groupsetting.collection';
import { ConversationCollection } from './conversation.collection';
import { ConversationThreadCollection } from './conversationthread.collection';
import { GroupLifecyclePolicyCollection } from './grouplifecyclepolicy.collection';
import { PlannerGroupCollection } from './plannergroup.collection';
//#endregion

export class GroupCollection<E extends Group, M extends GroupModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public delta(options?: HttpOptions): Observable<GroupCollection<Group, GroupModel<Group>>> {
    var res = this._function<null, Group>('microsoft.graph.delta');
    res.segment.entitySet('groups');
    return res.call(null, 'collection', options) as Observable<GroupCollection<Group, GroupModel<Group>>>;
  }
  //#endregion
}