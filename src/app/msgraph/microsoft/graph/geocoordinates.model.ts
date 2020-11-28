import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GeoCoordinates } from './geocoordinates.entity';
import { GeoCoordinatesCollection } from './geocoordinates.collection';
//#endregion

export class GeoCoordinatesModel<E extends GeoCoordinates> extends ODataModel<E> {
  //#region ODataApi Properties
  altitude?: number;
  latitude?: number;
  longitude?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}