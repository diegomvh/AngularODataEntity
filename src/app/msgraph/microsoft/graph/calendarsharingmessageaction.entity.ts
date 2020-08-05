import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CalendarSharingActionImportance } from './calendarsharingactionimportance.enum';
import { CalendarSharingActionType } from './calendarsharingactiontype.enum';
import { CalendarSharingAction } from './calendarsharingaction.enum';
//#endregion

export interface CalendarSharingMessageAction {
  //#region ODataApi Properties
  importance?: CalendarSharingActionImportance;
  actionType?: CalendarSharingActionType;
  action?: CalendarSharingAction;
  //#endregion
}