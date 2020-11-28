import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ChannelMembershipType } from './channelmembershiptype.enum';
import { DriveItem } from './driveitem.entity';
import { ConversationMember } from './conversationmember.entity';
import { Channel } from './channel.entity';
import { ChatMessage } from './chatmessage.entity';
import { TeamsTab } from './teamstab.entity';
import { DriveItemModel } from './driveitem.model';
import { ConversationMemberModel } from './conversationmember.model';
import { ChatMessageModel } from './chatmessage.model';
import { TeamsTabModel } from './teamstab.model';
import { DriveItemCollection } from './driveitem.collection';
import { ConversationMemberCollection } from './conversationmember.collection';
import { ChannelCollection } from './channel.collection';
import { ChatMessageCollection } from './chatmessage.collection';
import { TeamsTabCollection } from './teamstab.collection';
//#endregion

export class ChannelModel<E extends Channel> extends EntityModel<E> {
  //#region ODataApi Properties
  description?: string;
  displayName: string;
  email?: string;
  isFavoriteByDefault?: boolean;
  membershipType?: ChannelMembershipType;
  webUrl?: string;
  filesFolder?: DriveItemModel<DriveItem>;
  members?: ConversationMemberCollection<ConversationMember, ConversationMemberModel<ConversationMember>>;
  messages?: ChatMessageCollection<ChatMessage, ChatMessageModel<ChatMessage>>;
  tabs?: TeamsTabCollection<TeamsTab, TeamsTabModel<TeamsTab>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}