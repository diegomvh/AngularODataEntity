import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Calendar } from './calendar.entity';
import { CalendarGroup } from './calendargroup.entity';
import { CalendarModel } from './calendar.model';
import { CalendarGroupModel } from './calendargroup.model';
import { CalendarCollection } from './calendar.collection';
//#endregion

export class CalendarGroupCollection<E extends CalendarGroup, M extends CalendarGroupModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}