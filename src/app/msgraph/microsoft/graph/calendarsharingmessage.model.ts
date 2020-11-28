import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MessageModel } from './message.model';
import { CalendarSharingMessageAction } from './calendarsharingmessageaction.entity';
import { Calendar } from './calendar.entity';
import { CalendarSharingMessage } from './calendarsharingmessage.entity';
import { CalendarSharingMessageActionModel } from './calendarsharingmessageaction.model';
import { CalendarModel } from './calendar.model';
import { CalendarSharingMessageActionCollection } from './calendarsharingmessageaction.collection';
import { CalendarCollection } from './calendar.collection';
import { CalendarSharingMessageCollection } from './calendarsharingmessage.collection';
//#endregion

export class CalendarSharingMessageModel<E extends CalendarSharingMessage> extends MessageModel<E> {
  //#region ODataApi Properties
  canAccept?: boolean;
  sharingMessageAction?: CalendarSharingMessageActionModel<CalendarSharingMessageAction>;
  sharingMessageActions?: CalendarSharingMessageActionCollection<CalendarSharingMessageAction, CalendarSharingMessageActionModel<CalendarSharingMessageAction>>;
  suggestedCalendarName?: string;
  //#endregion
  //#region ODataApi Actions
  public accept(options?: HttpOptions): Observable<CalendarModel<Calendar>> {
    var res = this._action<null, Calendar>('microsoft.graph.accept');
    res.segment.entitySet('');
    return res.call(null, 'model', options) as Observable<CalendarModel<Calendar>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}