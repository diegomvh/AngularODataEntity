import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecurrenceRangeType } from './recurrencerangetype.enum';
import { RecurrenceRange } from './recurrencerange.entity';
import { RecurrenceRangeCollection } from './recurrencerange.collection';
//#endregion

export class RecurrenceRangeModel<E extends RecurrenceRange> extends ODataModel<E> {
  //#region ODataApi Properties
  endDate?: Date;
  numberOfOccurrences: number;
  recurrenceTimeZone?: string;
  startDate?: Date;
  type?: RecurrenceRangeType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}