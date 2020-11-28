import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Message } from './message.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { MessageRule } from './messagerule.entity';
import { EntityModel } from './entity.model';
import { MailFolderModel } from './mailfolder.model';
import { MessageModel } from './message.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { MessageRuleModel } from './messagerule.model';
import { EntityCollection } from './entity.collection';
import { MailFolderCollection } from './mailfolder.collection';
import { MessageCollection } from './message.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
import { MessageRuleCollection } from './messagerule.collection';
//#endregion

export interface MailFolder extends Entity {
  //#region ODataApi Properties
  childFolderCount?: number;
  displayName?: string;
  parentFolderId?: string;
  totalItemCount?: number;
  unreadItemCount?: number;
  childFolders?: MailFolder[];
  messageRules?: MessageRule[];
  messages?: Message[];
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  //#endregion
}