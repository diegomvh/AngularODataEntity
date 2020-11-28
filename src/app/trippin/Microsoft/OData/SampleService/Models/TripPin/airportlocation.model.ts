import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Point } from 'geojson';
import { LocationModel } from './location.model';
import { AirportLocation } from './airportlocation.complex';
import { AirportLocationCollection } from './airportlocation.collection';
//#endregion

export class AirportLocationModel<E extends AirportLocation> extends LocationModel<E> {
  //#region ODataApi Properties
  Loc: Point;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}