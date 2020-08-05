import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Importance } from './importance.enum';
import { Recipient } from './recipient.entity';
//#endregion

export interface MessageRuleActions {
  //#region ODataApi Properties
  moveToFolder?: string;
  copyToFolder?: string;
  delete?: boolean;
  permanentDelete?: boolean;
  markAsRead?: boolean;
  markImportance?: Importance;
  forwardTo?: Recipient[];
  forwardAsAttachmentTo?: Recipient[];
  redirectTo?: Recipient[];
  assignCategories?: string[];
  stopProcessingRules?: boolean;
  //#endregion
}