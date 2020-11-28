import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Recipient } from './recipient.entity';
import { ConversationThread } from './conversationthread.entity';
import { Post } from './post.entity';
import { RecipientModel } from './recipient.model';
import { PostModel } from './post.model';
import { RecipientCollection } from './recipient.collection';
import { ConversationThreadCollection } from './conversationthread.collection';
import { PostCollection } from './post.collection';
//#endregion

export class ConversationThreadModel<E extends ConversationThread> extends EntityModel<E> {
  //#region ODataApi Properties
  ccRecipients: RecipientCollection<Recipient, RecipientModel<Recipient>>;
  hasAttachments: boolean;
  isLocked: boolean;
  lastDeliveredDateTime: Date;
  preview: string;
  topic: string;
  toRecipients: RecipientCollection<Recipient, RecipientModel<Recipient>>;
  uniqueSenders: string[];
  posts?: PostCollection<Post, PostModel<Post>>;
  //#endregion
  //#region ODataApi Actions
  public reply(Post: Post, options?: HttpOptions): Observable<any> {
    var res = this._action<{Post: Post}, any>('microsoft.graph.reply');
    res.segment.entitySet('');
    return res.call({Post}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}