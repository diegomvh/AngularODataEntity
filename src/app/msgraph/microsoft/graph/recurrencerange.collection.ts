import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecurrenceRangeType } from './recurrencerangetype.enum';
import { RecurrenceRange } from './recurrencerange.entity';
import { RecurrenceRangeModel } from './recurrencerange.model';
//#endregion

export class RecurrenceRangeCollection<E extends RecurrenceRange, M extends RecurrenceRangeModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}