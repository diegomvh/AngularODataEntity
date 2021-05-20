import { ODataModel, ODataCollection, HttpOptions, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LocationCollection } from './location.collection';
import { AirportLocation } from './airportlocation.complex';
import { AirportLocationModel } from './airportlocation.model';
//#endregion

export class AirportLocationCollection<E extends AirportLocation, M extends AirportLocationModel<E>> extends LocationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}