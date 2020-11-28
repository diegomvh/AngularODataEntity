import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Message } from './message.entity';
import { CalendarSharingMessageAction } from './calendarsharingmessageaction.complex';
import { CalendarSharingMessageActionModel } from './calendarsharingmessageaction.model';
import { MessageModel } from './message.model';
import { CalendarSharingMessageActionCollection } from './calendarsharingmessageaction.collection';
import { MessageCollection } from './message.collection';
//#endregion

export interface CalendarSharingMessage extends Message {
  //#region ODataApi Properties
  canAccept?: boolean;
  sharingMessageAction?: CalendarSharingMessageAction;
  sharingMessageActions?: CalendarSharingMessageAction[];
  suggestedCalendarName?: string;
  //#endregion
}