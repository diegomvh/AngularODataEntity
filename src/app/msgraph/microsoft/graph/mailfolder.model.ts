import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { MailFolder } from './mailfolder.entity';
import { Message } from './message.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { MessageRule } from './messagerule.entity';
import { MessageModel } from './message.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { MessageRuleModel } from './messagerule.model';
import { MailFolderCollection } from './mailfolder.collection';
import { MessageCollection } from './message.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
import { MessageRuleCollection } from './messagerule.collection';
//#endregion

export class MailFolderModel<E extends MailFolder> extends EntityModel<E> {
  //#region ODataApi Properties
  childFolderCount?: number;
  displayName?: string;
  parentFolderId?: string;
  totalItemCount?: number;
  unreadItemCount?: number;
  childFolders?: MailFolderCollection<MailFolder, MailFolderModel<MailFolder>>;
  messageRules?: MessageRuleCollection<MessageRule, MessageRuleModel<MessageRule>>;
  messages?: MessageCollection<Message, MessageModel<Message>>;
  multiValueExtendedProperties?: MultiValueLegacyExtendedPropertyCollection<MultiValueLegacyExtendedProperty, MultiValueLegacyExtendedPropertyModel<MultiValueLegacyExtendedProperty>>;
  singleValueExtendedProperties?: SingleValueLegacyExtendedPropertyCollection<SingleValueLegacyExtendedProperty, SingleValueLegacyExtendedPropertyModel<SingleValueLegacyExtendedProperty>>;
  //#endregion
  //#region ODataApi Actions
  public copy(DestinationId: string, options?: HttpOptions): Observable<MailFolderModel<MailFolder>> {
    var res = this._action<{DestinationId: string}, MailFolder>('microsoft.graph.copy');
    res.segment.entitySet('');
    return res.call({DestinationId}, 'model', options) as Observable<MailFolderModel<MailFolder>>;
  }
  public move(DestinationId: string, options?: HttpOptions): Observable<MailFolderModel<MailFolder>> {
    var res = this._action<{DestinationId: string}, MailFolder>('microsoft.graph.move');
    res.segment.entitySet('');
    return res.call({DestinationId}, 'model', options) as Observable<MailFolderModel<MailFolder>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}