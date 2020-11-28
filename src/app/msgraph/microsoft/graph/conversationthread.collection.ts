import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Recipient } from './recipient.complex';
import { ConversationThread } from './conversationthread.entity';
import { Post } from './post.entity';
import { RecipientModel } from './recipient.model';
import { ConversationThreadModel } from './conversationthread.model';
import { PostModel } from './post.model';
import { RecipientCollection } from './recipient.collection';
import { PostCollection } from './post.collection';
//#endregion

export class ConversationThreadCollection<E extends ConversationThread, M extends ConversationThreadModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}