import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MessageCollection } from './message.collection';
import { CalendarSharingMessageAction } from './calendarsharingmessageaction.complex';
import { Calendar } from './calendar.entity';
import { CalendarSharingMessage } from './calendarsharingmessage.entity';
import { CalendarSharingMessageActionModel } from './calendarsharingmessageaction.model';
import { CalendarModel } from './calendar.model';
import { CalendarSharingMessageModel } from './calendarsharingmessage.model';
import { CalendarSharingMessageActionCollection } from './calendarsharingmessageaction.collection';
import { CalendarCollection } from './calendar.collection';
//#endregion

export class CalendarSharingMessageCollection<E extends CalendarSharingMessage, M extends CalendarSharingMessageModel<E>> extends MessageCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}