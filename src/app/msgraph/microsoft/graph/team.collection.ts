import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ClonableTeamParts } from './clonableteamparts.enum';
import { TeamSpecialization } from './teamspecialization.enum';
import { TeamVisibilityType } from './teamvisibilitytype.enum';
import { TeamFunSettings } from './teamfunsettings.complex';
import { TeamGuestSettings } from './teamguestsettings.complex';
import { TeamMemberSettings } from './teammembersettings.complex';
import { TeamMessagingSettings } from './teammessagingsettings.complex';
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
import { TeamModel } from './team.model';
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
import { GroupCollection } from './group.collection';
import { ConversationMemberCollection } from './conversationmember.collection';
import { ChannelCollection } from './channel.collection';
import { ScheduleCollection } from './schedule.collection';
import { TeamsAppInstallationCollection } from './teamsappinstallation.collection';
import { TeamsAsyncOperationCollection } from './teamsasyncoperation.collection';
import { TeamsTemplateCollection } from './teamstemplate.collection';
//#endregion

export class TeamCollection<E extends Team, M extends TeamModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}