import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TimeRange } from './timerange.complex';
import { TimeRangeCollection } from './timerange.collection';
//#endregion

export class TimeRangeModel<E extends TimeRange> extends ODataModel<E> {
  //#region ODataApi Properties
  endTime?: Date;
  startTime?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}