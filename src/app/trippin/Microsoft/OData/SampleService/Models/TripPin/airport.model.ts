import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AirportLocation } from './airportlocation.complex';
import { Airport } from './airport.entity';
import { AirportLocationModel } from './airportlocation.model';
import { AirportLocationCollection } from './airportlocation.collection';
import { AirportCollection } from './airport.collection';
//#endregion

@Model()
export class AirportModel<E extends Airport> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  IcaoCode!: string;
  
  
  @ModelField()
  Name!: string;
  
  
  @ModelField()
  IataCode!: string;
  
  
  @ModelField()
  Location!: AirportLocationModel<AirportLocation>;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}