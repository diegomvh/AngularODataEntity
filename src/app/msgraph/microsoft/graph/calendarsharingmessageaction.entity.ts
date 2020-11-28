import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CalendarSharingAction } from './calendarsharingaction.enum';
import { CalendarSharingActionImportance } from './calendarsharingactionimportance.enum';
import { CalendarSharingActionType } from './calendarsharingactiontype.enum';
//#endregion

export interface CalendarSharingMessageAction {
  //#region ODataApi Properties
  action?: CalendarSharingAction;
  actionType?: CalendarSharingActionType;
  importance?: CalendarSharingActionImportance;
  //#endregion
}