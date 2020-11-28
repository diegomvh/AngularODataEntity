import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Importance } from './importance.enum';
import { Recipient } from './recipient.complex';
import { RecipientModel } from './recipient.model';
import { RecipientCollection } from './recipient.collection';
//#endregion

export interface MessageRuleActions {
  //#region ODataApi Properties
  assignCategories?: string[];
  copyToFolder?: string;
  delete?: boolean;
  forwardAsAttachmentTo?: Recipient[];
  forwardTo?: Recipient[];
  markAsRead?: boolean;
  markImportance?: Importance;
  moveToFolder?: string;
  permanentDelete?: boolean;
  redirectTo?: Recipient[];
  stopProcessingRules?: boolean;
  //#endregion
}