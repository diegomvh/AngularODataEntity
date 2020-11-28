import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ClonableTeamParts } from './clonableteamparts.enum';
import { TeamSpecialization } from './teamspecialization.enum';
import { TeamVisibilityType } from './teamvisibilitytype.enum';
import { TeamFunSettings } from './teamfunsettings.entity';
import { TeamGuestSettings } from './teamguestsettings.entity';
import { TeamMemberSettings } from './teammembersettings.entity';
import { TeamMessagingSettings } from './teammessagingsettings.entity';
import { Team } from './team.entity';
import { Group } from './group.entity';
import { ConversationMember } from './conversationmember.entity';
import { Channel } from './channel.entity';
import { Schedule } from './schedule.entity';
import { TeamsAppInstallation } from './teamsappinstallation.entity';
import { TeamsAsyncOperation } from './teamsasyncoperation.entity';
import { TeamsTemplate } from './teamstemplate.entity';
import { TeamFunSettingsModel } from './teamfunsettings.model';
import { TeamGuestSettingsModel } from './teamguestsettings.model';
import { TeamMemberSettingsModel } from './teammembersettings.model';
import { TeamMessagingSettingsModel } from './teammessagingsettings.model';
import { GroupModel } from './group.model';
import { ConversationMemberModel } from './conversationmember.model';
import { ChannelModel } from './channel.model';
import { ScheduleModel } from './schedule.model';
import { TeamsAppInstallationModel } from './teamsappinstallation.model';
import { TeamsAsyncOperationModel } from './teamsasyncoperation.model';
import { TeamsTemplateModel } from './teamstemplate.model';
import { TeamFunSettingsCollection } from './teamfunsettings.collection';
import { TeamGuestSettingsCollection } from './teamguestsettings.collection';
import { TeamMemberSettingsCollection } from './teammembersettings.collection';
import { TeamMessagingSettingsCollection } from './teammessagingsettings.collection';
import { TeamCollection } from './team.collection';
import { GroupCollection } from './group.collection';
import { ConversationMemberCollection } from './conversationmember.collection';
import { ChannelCollection } from './channel.collection';
import { ScheduleCollection } from './schedule.collection';
import { TeamsAppInstallationCollection } from './teamsappinstallation.collection';
import { TeamsAsyncOperationCollection } from './teamsasyncoperation.collection';
import { TeamsTemplateCollection } from './teamstemplate.collection';
//#endregion

export class TeamModel<E extends Team> extends EntityModel<E> {
  //#region ODataApi Properties
  classification?: string;
  description?: string;
  displayName?: string;
  funSettings?: TeamFunSettingsModel<TeamFunSettings>;
  guestSettings?: TeamGuestSettingsModel<TeamGuestSettings>;
  internalId?: string;
  isArchived?: boolean;
  memberSettings?: TeamMemberSettingsModel<TeamMemberSettings>;
  messagingSettings?: TeamMessagingSettingsModel<TeamMessagingSettings>;
  specialization?: TeamSpecialization;
  visibility?: TeamVisibilityType;
  webUrl?: string;
  schedule?: ScheduleModel<Schedule>;
  channels?: ChannelCollection<Channel, ChannelModel<Channel>>;
  group?: GroupModel<Group>;
  installedApps?: TeamsAppInstallationCollection<TeamsAppInstallation, TeamsAppInstallationModel<TeamsAppInstallation>>;
  members?: ConversationMemberCollection<ConversationMember, ConversationMemberModel<ConversationMember>>;
  operations?: TeamsAsyncOperationCollection<TeamsAsyncOperation, TeamsAsyncOperationModel<TeamsAsyncOperation>>;
  primaryChannel?: ChannelModel<Channel>;
  template?: TeamsTemplateModel<TeamsTemplate>;
  //#endregion
  //#region ODataApi Actions
  public archive(shouldSetSpoSiteReadOnlyForMembers: boolean, options?: HttpOptions): Observable<any> {
    var res = this._action<{shouldSetSpoSiteReadOnlyForMembers: boolean}, any>('microsoft.graph.archive');
    res.segment.entitySet('teams');
    return res.call({shouldSetSpoSiteReadOnlyForMembers}, 'property', options) as Observable<any>;
  }
  public clone(displayName: string, description: string, mailNickname: string, classification: string, visibility: TeamVisibilityType, partsToClone: ClonableTeamParts, options?: HttpOptions): Observable<any> {
    var res = this._action<{displayName: string, description: string, mailNickname: string, classification: string, visibility: TeamVisibilityType, partsToClone: ClonableTeamParts}, any>('microsoft.graph.clone');
    res.segment.entitySet('teams');
    return res.call({displayName, description, mailNickname, classification, visibility, partsToClone}, 'property', options) as Observable<any>;
  }
  public unarchive(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.unarchive');
    res.segment.entitySet('teams');
    return res.call(null, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}