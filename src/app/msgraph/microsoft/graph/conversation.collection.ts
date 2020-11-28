import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Conversation } from './conversation.entity';
import { ConversationThread } from './conversationthread.entity';
import { ConversationModel } from './conversation.model';
import { ConversationThreadModel } from './conversationthread.model';
import { ConversationThreadCollection } from './conversationthread.collection';
//#endregion

export class ConversationCollection<E extends Conversation, M extends ConversationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}