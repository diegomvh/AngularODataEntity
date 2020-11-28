import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TimeZoneBaseCollection } from './timezonebase.collection';
import { CustomTimeZone } from './customtimezone.complex';
import { StandardTimeZoneOffset } from './standardtimezoneoffset.complex';
import { DaylightTimeZoneOffset } from './daylighttimezoneoffset.complex';
import { CustomTimeZoneModel } from './customtimezone.model';
import { StandardTimeZoneOffsetModel } from './standardtimezoneoffset.model';
import { DaylightTimeZoneOffsetModel } from './daylighttimezoneoffset.model';
import { StandardTimeZoneOffsetCollection } from './standardtimezoneoffset.collection';
import { DaylightTimeZoneOffsetCollection } from './daylighttimezoneoffset.collection';
//#endregion

export class CustomTimeZoneCollection<E extends CustomTimeZone, M extends CustomTimeZoneModel<E>> extends TimeZoneBaseCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}