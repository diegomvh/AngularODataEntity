import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ChannelMembershipType } from './channelmembershiptype.enum';
import { DriveItem } from './driveitem.entity';
import { ConversationMember } from './conversationmember.entity';
import { Channel } from './channel.entity';
import { ChatMessage } from './chatmessage.entity';
import { TeamsTab } from './teamstab.entity';
import { DriveItemModel } from './driveitem.model';
import { ConversationMemberModel } from './conversationmember.model';
import { ChannelModel } from './channel.model';
import { ChatMessageModel } from './chatmessage.model';
import { TeamsTabModel } from './teamstab.model';
import { DriveItemCollection } from './driveitem.collection';
import { ConversationMemberCollection } from './conversationmember.collection';
import { ChatMessageCollection } from './chatmessage.collection';
import { TeamsTabCollection } from './teamstab.collection';
//#endregion

export class ChannelCollection<E extends Channel, M extends ChannelModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}