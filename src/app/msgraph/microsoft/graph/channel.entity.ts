import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ChannelMembershipType } from './channelmembershiptype.enum';
import { DriveItem } from './driveitem.entity';
import { ConversationMember } from './conversationmember.entity';
import { ChatMessage } from './chatmessage.entity';
import { TeamsTab } from './teamstab.entity';
import { EntityModel } from './entity.model';
import { DriveItemModel } from './driveitem.model';
import { ConversationMemberModel } from './conversationmember.model';
import { ChatMessageModel } from './chatmessage.model';
import { TeamsTabModel } from './teamstab.model';
import { EntityCollection } from './entity.collection';
import { DriveItemCollection } from './driveitem.collection';
import { ConversationMemberCollection } from './conversationmember.collection';
import { ChatMessageCollection } from './chatmessage.collection';
import { TeamsTabCollection } from './teamstab.collection';
//#endregion

export interface Channel extends Entity {
  //#region ODataApi Properties
  description?: string;
  displayName: string;
  email?: string;
  isFavoriteByDefault?: boolean;
  membershipType?: ChannelMembershipType;
  webUrl?: string;
  filesFolder?: DriveItem;
  members?: ConversationMember[];
  messages?: ChatMessage[];
  tabs?: TeamsTab[];
  //#endregion
}