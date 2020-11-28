import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OutlookItemModel } from './outlookitem.model';
import { Recipient } from './recipient.complex';
import { ItemBody } from './itembody.complex';
import { Extension } from './extension.entity';
import { Attachment } from './attachment.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { Post } from './post.entity';
import { RecipientModel } from './recipient.model';
import { ItemBodyModel } from './itembody.model';
import { ExtensionModel } from './extension.model';
import { AttachmentModel } from './attachment.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { RecipientCollection } from './recipient.collection';
import { ItemBodyCollection } from './itembody.collection';
import { ExtensionCollection } from './extension.collection';
import { AttachmentCollection } from './attachment.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
import { PostCollection } from './post.collection';
//#endregion

export class PostModel<E extends Post> extends OutlookItemModel<E> {
  //#region ODataApi Properties
  body?: ItemBodyModel<ItemBody>;
  conversationId?: string;
  conversationThreadId?: string;
  from: RecipientModel<Recipient>;
  hasAttachments: boolean;
  newParticipants: RecipientCollection<Recipient, RecipientModel<Recipient>>;
  receivedDateTime: Date;
  sender?: RecipientModel<Recipient>;
  attachments?: AttachmentCollection<Attachment, AttachmentModel<Attachment>>;
  extensions?: ExtensionCollection<Extension, ExtensionModel<Extension>>;
  inReplyTo?: PostModel<Post>;
  multiValueExtendedProperties?: MultiValueLegacyExtendedPropertyCollection<MultiValueLegacyExtendedProperty, MultiValueLegacyExtendedPropertyModel<MultiValueLegacyExtendedProperty>>;
  singleValueExtendedProperties?: SingleValueLegacyExtendedPropertyCollection<SingleValueLegacyExtendedProperty, SingleValueLegacyExtendedPropertyModel<SingleValueLegacyExtendedProperty>>;
  //#endregion
  //#region ODataApi Actions
  public forward(Comment: string, ToRecipients: Recipient[], options?: HttpOptions): Observable<any> {
    var res = this._action<{Comment: string, ToRecipients: Recipient[]}, any>('microsoft.graph.forward');
    res.segment.entitySet('');
    return res.call({Comment, ToRecipients}, 'property', options) as Observable<any>;
  }
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