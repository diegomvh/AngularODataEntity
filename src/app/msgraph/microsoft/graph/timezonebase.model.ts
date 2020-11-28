import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TimeZoneBase } from './timezonebase.entity';
import { TimeZoneBaseCollection } from './timezonebase.collection';
//#endregion

export class TimeZoneBaseModel<E extends TimeZoneBase> extends ODataModel<E> {
  //#region ODataApi Properties
  name?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}