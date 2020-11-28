import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { TimeSlot } from './timeslot.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { TimeSlotCollection } from './timeslot.collection';
//#endregion

export class TimeSlotModel<E extends TimeSlot> extends ODataModel<E> {
  //#region ODataApi Properties
  end: DateTimeTimeZoneModel<DateTimeTimeZone>;
  start: DateTimeTimeZoneModel<DateTimeTimeZone>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}