import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DayOfWeek } from './dayofweek.enum';
import { WorkingHours } from './workinghours.entity';
import { TimeZoneBase } from './timezonebase.entity';
import { TimeZoneBaseModel } from './timezonebase.model';
import { WorkingHoursCollection } from './workinghours.collection';
import { TimeZoneBaseCollection } from './timezonebase.collection';
//#endregion

export class WorkingHoursModel<E extends WorkingHours> extends ODataModel<E> {
  //#region ODataApi Properties
  daysOfWeek?: DayOfWeek;
  endTime?: Date;
  startTime?: Date;
  timeZone?: TimeZoneBaseModel<TimeZoneBase>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}