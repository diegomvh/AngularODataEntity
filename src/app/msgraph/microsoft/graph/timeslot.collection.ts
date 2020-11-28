import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { TimeSlot } from './timeslot.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { TimeSlotModel } from './timeslot.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
//#endregion

export class TimeSlotCollection<E extends TimeSlot, M extends TimeSlotModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}