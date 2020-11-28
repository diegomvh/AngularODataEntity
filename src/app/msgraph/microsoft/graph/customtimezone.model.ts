import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TimeZoneBaseModel } from './timezonebase.model';
import { CustomTimeZone } from './customtimezone.entity';
import { StandardTimeZoneOffset } from './standardtimezoneoffset.entity';
import { DaylightTimeZoneOffset } from './daylighttimezoneoffset.entity';
import { StandardTimeZoneOffsetModel } from './standardtimezoneoffset.model';
import { DaylightTimeZoneOffsetModel } from './daylighttimezoneoffset.model';
import { CustomTimeZoneCollection } from './customtimezone.collection';
import { StandardTimeZoneOffsetCollection } from './standardtimezoneoffset.collection';
import { DaylightTimeZoneOffsetCollection } from './daylighttimezoneoffset.collection';
//#endregion

export class CustomTimeZoneModel<E extends CustomTimeZone> extends TimeZoneBaseModel<E> {
  //#region ODataApi Properties
  bias?: number;
  daylightOffset?: DaylightTimeZoneOffsetModel<DaylightTimeZoneOffset>;
  standardOffset?: StandardTimeZoneOffsetModel<StandardTimeZoneOffset>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}