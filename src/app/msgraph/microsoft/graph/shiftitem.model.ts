import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ScheduleEntityModel } from './scheduleentity.model';
import { ShiftItem } from './shiftitem.entity';
import { ShiftActivity } from './shiftactivity.entity';
import { ShiftActivityModel } from './shiftactivity.model';
import { ShiftItemCollection } from './shiftitem.collection';
import { ShiftActivityCollection } from './shiftactivity.collection';
//#endregion

export class ShiftItemModel<E extends ShiftItem> extends ScheduleEntityModel<E> {
  //#region ODataApi Properties
  activities?: ShiftActivityCollection<ShiftActivity, ShiftActivityModel<ShiftActivity>>;
  displayName?: string;
  notes?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}