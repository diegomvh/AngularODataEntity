import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DayOfWeek } from './dayofweek.enum';
import { RecurrencePatternType } from './recurrencepatterntype.enum';
import { WeekIndex } from './weekindex.enum';
import { RecurrencePattern } from './recurrencepattern.complex';
import { RecurrencePatternModel } from './recurrencepattern.model';
//#endregion

export class RecurrencePatternCollection<E extends RecurrencePattern, M extends RecurrencePatternModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}