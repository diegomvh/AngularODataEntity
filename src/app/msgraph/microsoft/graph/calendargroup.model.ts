import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Calendar } from './calendar.entity';
import { CalendarGroup } from './calendargroup.entity';
import { CalendarModel } from './calendar.model';
import { CalendarCollection } from './calendar.collection';
import { CalendarGroupCollection } from './calendargroup.collection';
//#endregion

export class CalendarGroupModel<E extends CalendarGroup> extends EntityModel<E> {
  //#region ODataApi Properties
  changeKey?: string;
  classId?: string;
  name?: string;
  calendars?: CalendarCollection<Calendar, CalendarModel<Calendar>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}