import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { StandardTimeZoneOffsetModel } from './standardtimezoneoffset.model';
import { DaylightTimeZoneOffset } from './daylighttimezoneoffset.complex';
import { DaylightTimeZoneOffsetCollection } from './daylighttimezoneoffset.collection';
//#endregion

export class DaylightTimeZoneOffsetModel<E extends DaylightTimeZoneOffset> extends StandardTimeZoneOffsetModel<E> {
  //#region ODataApi Properties
  daylightBias?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}