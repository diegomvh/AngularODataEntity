import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TeamSpecialization } from './teamspecialization.enum';
import { TeamVisibilityType } from './teamvisibilitytype.enum';
import { TeamFunSettings } from './teamfunsettings.complex';
import { TeamGuestSettings } from './teamguestsettings.complex';
import { TeamMemberSettings } from './teammembersettings.complex';
import { TeamMessagingSettings } from './teammessagingsettings.complex';
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
import { EntityModel } from './entity.model';
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
import { EntityCollection } from './entity.collection';
import { GroupCollection } from './group.collection';
import { ConversationMemberCollection } from './conversationmember.collection';
import { ChannelCollection } from './channel.collection';
import { ScheduleCollection } from './schedule.collection';
import { TeamsAppInstallationCollection } from './teamsappinstallation.collection';
import { TeamsAsyncOperationCollection } from './teamsasyncoperation.collection';
import { TeamsTemplateCollection } from './teamstemplate.collection';
//#endregion

export interface Team extends Entity {
  //#region ODataApi Properties
  classification?: string;
  description?: string;
  displayName?: string;
  funSettings?: TeamFunSettings;
  guestSettings?: TeamGuestSettings;
  internalId?: string;
  isArchived?: boolean;
  memberSettings?: TeamMemberSettings;
  messagingSettings?: TeamMessagingSettings;
  specialization?: TeamSpecialization;
  visibility?: TeamVisibilityType;
  webUrl?: string;
  schedule?: Schedule;
  channels?: Channel[];
  group?: Group;
  installedApps?: TeamsAppInstallation[];
  members?: ConversationMember[];
  operations?: TeamsAsyncOperation[];
  primaryChannel?: Channel;
  template?: TeamsTemplate;
  //#endregion
}