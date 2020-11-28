import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ScheduleEntityCollection } from './scheduleentity.collection';
import { ShiftItem } from './shiftitem.entity';
import { ShiftActivity } from './shiftactivity.entity';
import { ShiftItemModel } from './shiftitem.model';
import { ShiftActivityModel } from './shiftactivity.model';
import { ShiftActivityCollection } from './shiftactivity.collection';
//#endregion

export class ShiftItemCollection<E extends ShiftItem, M extends ShiftItemModel<E>> extends ScheduleEntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}