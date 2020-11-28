import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OutlookItemModel } from './outlookitem.model';
import { Importance } from './importance.enum';
import { InferenceClassificationType } from './inferenceclassificationtype.enum';
import { Recipient } from './recipient.complex';
import { FollowupFlag } from './followupflag.complex';
import { InternetMessageHeader } from './internetmessageheader.complex';
import { ItemBody } from './itembody.complex';
import { Message } from './message.entity';
import { Extension } from './extension.entity';
import { Attachment } from './attachment.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { RecipientModel } from './recipient.model';
import { FollowupFlagModel } from './followupflag.model';
import { InternetMessageHeaderModel } from './internetmessageheader.model';
import { ItemBodyModel } from './itembody.model';
import { ExtensionModel } from './extension.model';
import { AttachmentModel } from './attachment.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { RecipientCollection } from './recipient.collection';
import { FollowupFlagCollection } from './followupflag.collection';
import { InternetMessageHeaderCollection } from './internetmessageheader.collection';
import { ItemBodyCollection } from './itembody.collection';
import { MessageCollection } from './message.collection';
import { ExtensionCollection } from './extension.collection';
import { AttachmentCollection } from './attachment.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
//#endregion

export class MessageModel<E extends Message> extends OutlookItemModel<E> {
  //#region ODataApi Properties
  bccRecipients?: RecipientCollection<Recipient, RecipientModel<Recipient>>;
  body?: ItemBodyModel<ItemBody>;
  bodyPreview?: string;
  ccRecipients?: RecipientCollection<Recipient, RecipientModel<Recipient>>;
  conversationId?: string;
  conversationIndex?: ArrayBuffer;
  flag?: FollowupFlagModel<FollowupFlag>;
  from?: RecipientModel<Recipient>;
  hasAttachments?: boolean;
  importance?: Importance;
  inferenceClassification?: InferenceClassificationType;
  internetMessageHeaders?: InternetMessageHeaderCollection<InternetMessageHeader, InternetMessageHeaderModel<InternetMessageHeader>>;
  internetMessageId?: string;
  isDeliveryReceiptRequested?: boolean;
  isDraft?: boolean;
  isRead?: boolean;
  isReadReceiptRequested?: boolean;
  parentFolderId?: string;
  receivedDateTime?: Date;
  replyTo?: RecipientCollection<Recipient, RecipientModel<Recipient>>;
  sender?: RecipientModel<Recipient>;
  sentDateTime?: Date;
  subject?: string;
  toRecipients?: RecipientCollection<Recipient, RecipientModel<Recipient>>;
  uniqueBody?: ItemBodyModel<ItemBody>;
  webLink?: string;
  attachments?: AttachmentCollection<Attachment, AttachmentModel<Attachment>>;
  extensions?: ExtensionCollection<Extension, ExtensionModel<Extension>>;
  multiValueExtendedProperties?: MultiValueLegacyExtendedPropertyCollection<MultiValueLegacyExtendedProperty, MultiValueLegacyExtendedPropertyModel<MultiValueLegacyExtendedProperty>>;
  singleValueExtendedProperties?: SingleValueLegacyExtendedPropertyCollection<SingleValueLegacyExtendedProperty, SingleValueLegacyExtendedPropertyModel<SingleValueLegacyExtendedProperty>>;
  //#endregion
  //#region ODataApi Actions
  public forward(ToRecipients: Recipient[], Message: Message, Comment: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{ToRecipients: Recipient[], Message: Message, Comment: string}, any>('microsoft.graph.forward');
    res.segment.entitySet('');
    return res.call({ToRecipients, Message, Comment}, 'property', options) as Observable<any>;
  }
  public copy(DestinationId: string, options?: HttpOptions): Observable<MessageModel<Message>> {
    var res = this._action<{DestinationId: string}, Message>('microsoft.graph.copy');
    res.segment.entitySet('');
    return res.call({DestinationId}, 'model', options) as Observable<MessageModel<Message>>;
  }
  public move(DestinationId: string, options?: HttpOptions): Observable<MessageModel<Message>> {
    var res = this._action<{DestinationId: string}, Message>('microsoft.graph.move');
    res.segment.entitySet('');
    return res.call({DestinationId}, 'model', options) as Observable<MessageModel<Message>>;
  }
  public createForward(ToRecipients: Recipient[], Message: Message, Comment: string, options?: HttpOptions): Observable<MessageModel<Message>> {
    var res = this._action<{ToRecipients: Recipient[], Message: Message, Comment: string}, Message>('microsoft.graph.createForward');
    res.segment.entitySet('');
    return res.call({ToRecipients, Message, Comment}, 'model', options) as Observable<MessageModel<Message>>;
  }
  public createReply(Message: Message, Comment: string, options?: HttpOptions): Observable<MessageModel<Message>> {
    var res = this._action<{Message: Message, Comment: string}, Message>('microsoft.graph.createReply');
    res.segment.entitySet('');
    return res.call({Message, Comment}, 'model', options) as Observable<MessageModel<Message>>;
  }
  public createReplyAll(Message: Message, Comment: string, options?: HttpOptions): Observable<MessageModel<Message>> {
    var res = this._action<{Message: Message, Comment: string}, Message>('microsoft.graph.createReplyAll');
    res.segment.entitySet('');
    return res.call({Message, Comment}, 'model', options) as Observable<MessageModel<Message>>;
  }
  public reply(Message: Message, Comment: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{Message: Message, Comment: string}, any>('microsoft.graph.reply');
    res.segment.entitySet('');
    return res.call({Message, Comment}, 'property', options) as Observable<any>;
  }
  public replyAll(Message: Message, Comment: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{Message: Message, Comment: string}, any>('microsoft.graph.replyAll');
    res.segment.entitySet('');
    return res.call({Message, Comment}, 'property', options) as Observable<any>;
  }
  public send(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.send');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}