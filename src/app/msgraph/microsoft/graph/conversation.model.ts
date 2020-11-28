import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Conversation } from './conversation.entity';
import { ConversationThread } from './conversationthread.entity';
import { ConversationThreadModel } from './conversationthread.model';
import { ConversationCollection } from './conversation.collection';
import { ConversationThreadCollection } from './conversationthread.collection';
//#endregion

export class ConversationModel<E extends Conversation> extends EntityModel<E> {
  //#region ODataApi Properties
  hasAttachments: boolean;
  lastDeliveredDateTime: Date;
  preview: string;
  topic: string;
  uniqueSenders: string[];
  threads?: ConversationThreadCollection<ConversationThread, ConversationThreadModel<ConversationThread>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}