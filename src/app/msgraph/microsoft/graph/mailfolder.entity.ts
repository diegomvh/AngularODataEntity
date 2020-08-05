import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Message } from './message.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { MessageRule } from './messagerule.entity';
//#endregion

export interface MailFolder extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  parentFolderId?: string;
  childFolderCount?: number;
  unreadItemCount?: number;
  totalItemCount?: number;
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  messages?: Message[];
  messageRules?: MessageRule[];
  childFolders?: MailFolder[];
  //#endregion
}