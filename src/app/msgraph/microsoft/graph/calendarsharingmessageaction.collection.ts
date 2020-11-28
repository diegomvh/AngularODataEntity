import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CalendarSharingAction } from './calendarsharingaction.enum';
import { CalendarSharingActionImportance } from './calendarsharingactionimportance.enum';
import { CalendarSharingActionType } from './calendarsharingactiontype.enum';
import { CalendarSharingMessageAction } from './calendarsharingmessageaction.complex';
import { CalendarSharingMessageActionModel } from './calendarsharingmessageaction.model';
//#endregion

export class CalendarSharingMessageActionCollection<E extends CalendarSharingMessageAction, M extends CalendarSharingMessageActionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}