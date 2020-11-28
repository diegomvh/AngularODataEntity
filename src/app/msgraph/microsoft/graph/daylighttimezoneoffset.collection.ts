import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { StandardTimeZoneOffsetCollection } from './standardtimezoneoffset.collection';
import { DaylightTimeZoneOffset } from './daylighttimezoneoffset.complex';
import { DaylightTimeZoneOffsetModel } from './daylighttimezoneoffset.model';
//#endregion

export class DaylightTimeZoneOffsetCollection<E extends DaylightTimeZoneOffset, M extends DaylightTimeZoneOffsetModel<E>> extends StandardTimeZoneOffsetCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}