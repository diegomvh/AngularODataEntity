import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DayOfWeek } from './dayofweek.enum';
import { StandardTimeZoneOffset } from './standardtimezoneoffset.complex';
import { StandardTimeZoneOffsetCollection } from './standardtimezoneoffset.collection';
//#endregion

export class StandardTimeZoneOffsetModel<E extends StandardTimeZoneOffset> extends ODataModel<E> {
  //#region ODataApi Properties
  dayOccurrence?: number;
  dayOfWeek?: DayOfWeek;
  month?: number;
  time?: Date;
  year?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}