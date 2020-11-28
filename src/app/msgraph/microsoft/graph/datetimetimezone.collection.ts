import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
//#endregion

export class DateTimeTimeZoneCollection<E extends DateTimeTimeZone, M extends DateTimeTimeZoneModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}