import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Message } from './message.entity';
import { CalendarSharingMessageAction } from './calendarsharingmessageaction.entity';
//#endregion

export interface CalendarSharingMessage extends Message {
  //#region ODataApi Properties
  canAccept?: boolean;
  suggestedCalendarName?: string;
  sharingMessageAction?: CalendarSharingMessageAction;
  sharingMessageActions?: CalendarSharingMessageAction[];
  //#endregion
}