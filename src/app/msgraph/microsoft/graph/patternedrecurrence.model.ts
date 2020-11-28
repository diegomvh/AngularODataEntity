import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PatternedRecurrence } from './patternedrecurrence.entity';
import { RecurrencePattern } from './recurrencepattern.entity';
import { RecurrenceRange } from './recurrencerange.entity';
import { RecurrencePatternModel } from './recurrencepattern.model';
import { RecurrenceRangeModel } from './recurrencerange.model';
import { PatternedRecurrenceCollection } from './patternedrecurrence.collection';
import { RecurrencePatternCollection } from './recurrencepattern.collection';
import { RecurrenceRangeCollection } from './recurrencerange.collection';
//#endregion

export class PatternedRecurrenceModel<E extends PatternedRecurrence> extends ODataModel<E> {
  //#region ODataApi Properties
  pattern?: RecurrencePatternModel<RecurrencePattern>;
  range?: RecurrenceRangeModel<RecurrenceRange>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}