import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PatternedRecurrence } from './patternedrecurrence.entity';
import { ShiftAvailability } from './shiftavailability.entity';
import { TimeRange } from './timerange.entity';
import { PatternedRecurrenceModel } from './patternedrecurrence.model';
import { ShiftAvailabilityModel } from './shiftavailability.model';
import { TimeRangeModel } from './timerange.model';
import { PatternedRecurrenceCollection } from './patternedrecurrence.collection';
import { TimeRangeCollection } from './timerange.collection';
//#endregion

export class ShiftAvailabilityCollection<E extends ShiftAvailability, M extends ShiftAvailabilityModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}