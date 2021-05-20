import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { City } from './city.complex';
import { CityCollection } from './city.collection';
//#endregion

@Model()
export class CityModel<E extends City> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  CountryRegion!: string;
  
  
  @ModelField()
  Name!: string;
  
  
  @ModelField()
  Region!: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}