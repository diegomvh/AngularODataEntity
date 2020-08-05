import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TeamVisibilityType } from './teamvisibilitytype.enum';
import { TeamSpecialization } from './teamspecialization.enum';
import { TeamMemberSettings } from './teammembersettings.entity';
import { TeamGuestSettings } from './teamguestsettings.entity';
import { TeamMessagingSettings } from './teammessagingsettings.entity';
import { TeamFunSettings } from './teamfunsettings.entity';
import { Group } from './group.entity';
import { Schedule } from './schedule.entity';
import { TeamsTemplate } from './teamstemplate.entity';
import { ConversationMember } from './conversationmember.entity';
import { Channel } from './channel.entity';
import { TeamsAppInstallation } from './teamsappinstallation.entity';
import { TeamsAsyncOperation } from './teamsasyncoperation.entity';
//#endregion

export interface Team extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  description?: string;
  internalId?: string;
  classification?: string;
  specialization?: TeamSpecialization;
  visibility?: TeamVisibilityType;
  webUrl?: string;
  memberSettings?: TeamMemberSettings;
  guestSettings?: TeamGuestSettings;
  messagingSettings?: TeamMessagingSettings;
  funSettings?: TeamFunSettings;
  isArchived?: boolean;
  schedule?: Schedule;
  group?: Group;
  template?: TeamsTemplate;
  members?: ConversationMember[];
  channels?: Channel[];
  primaryChannel?: Channel;
  installedApps?: TeamsAppInstallation[];
  operations?: TeamsAsyncOperation[];
  //#endregion
}