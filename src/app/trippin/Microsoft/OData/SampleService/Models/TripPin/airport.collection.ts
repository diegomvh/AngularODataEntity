import { ODataModel, ODataCollection, HttpOptions, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AirportLocation } from './airportlocation.complex';
import { Airport } from './airport.entity';
import { AirportLocationModel } from './airportlocation.model';
import { AirportModel } from './airport.model';
import { AirportLocationCollection } from './airportlocation.collection';
//#endregion

export class AirportCollection<E extends Airport, M extends AirportModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}