import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ScheduleEntityCollection } from './scheduleentity.collection';
import { TimeOffItem } from './timeoffitem.entity';
import { TimeOffItemModel } from './timeoffitem.model';
//#endregion

export class TimeOffItemCollection<E extends TimeOffItem, M extends TimeOffItemModel<E>> extends ScheduleEntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}