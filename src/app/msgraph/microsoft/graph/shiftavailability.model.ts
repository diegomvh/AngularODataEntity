import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PatternedRecurrence } from './patternedrecurrence.entity';
import { ShiftAvailability } from './shiftavailability.entity';
import { TimeRange } from './timerange.entity';
import { PatternedRecurrenceModel } from './patternedrecurrence.model';
import { TimeRangeModel } from './timerange.model';
import { PatternedRecurrenceCollection } from './patternedrecurrence.collection';
import { ShiftAvailabilityCollection } from './shiftavailability.collection';
import { TimeRangeCollection } from './timerange.collection';
//#endregion

export class ShiftAvailabilityModel<E extends ShiftAvailability> extends ODataModel<E> {
  //#region ODataApi Properties
  recurrence?: PatternedRecurrenceModel<PatternedRecurrence>;
  timeSlots?: TimeRangeCollection<TimeRange, TimeRangeModel<TimeRange>>;
  timeZone?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}