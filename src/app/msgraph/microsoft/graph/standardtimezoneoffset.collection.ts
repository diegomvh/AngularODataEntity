import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DayOfWeek } from './dayofweek.enum';
import { StandardTimeZoneOffset } from './standardtimezoneoffset.complex';
import { StandardTimeZoneOffsetModel } from './standardtimezoneoffset.model';
//#endregion

export class StandardTimeZoneOffsetCollection<E extends StandardTimeZoneOffset, M extends StandardTimeZoneOffsetModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}