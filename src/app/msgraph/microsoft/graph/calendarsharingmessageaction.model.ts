import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CalendarSharingAction } from './calendarsharingaction.enum';
import { CalendarSharingActionImportance } from './calendarsharingactionimportance.enum';
import { CalendarSharingActionType } from './calendarsharingactiontype.enum';
import { CalendarSharingMessageAction } from './calendarsharingmessageaction.complex';
import { CalendarSharingMessageActionCollection } from './calendarsharingmessageaction.collection';
//#endregion

export class CalendarSharingMessageActionModel<E extends CalendarSharingMessageAction> extends ODataModel<E> {
  //#region ODataApi Properties
  action?: CalendarSharingAction;
  actionType?: CalendarSharingActionType;
  importance?: CalendarSharingActionImportance;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}