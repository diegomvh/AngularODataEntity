import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GeolocationColumn } from './geolocationcolumn.entity';
import { GeolocationColumnModel } from './geolocationcolumn.model';
//#endregion

export class GeolocationColumnCollection<E extends GeolocationColumn, M extends GeolocationColumnModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}