import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { City } from './city.complex';
import { Location } from './location.complex';
import { CityModel } from './city.model';
import { CityCollection } from './city.collection';
import { LocationCollection } from './location.collection';
//#endregion

@Model()
export class LocationModel<E extends Location> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  Address!: string;
  
  
  @ModelField()
  City!: CityModel<City>;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}