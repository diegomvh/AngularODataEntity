import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { City } from './city.complex';
import { CityCollection } from './city.collection';
//#endregion

export class CityModel<E extends City> extends ODataModel<E> {
  //#region ODataApi Properties
  CountryRegion!: string;
  Name!: string;
  Region!: string;
  //#endregion
  //#region ODataApi Setters
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}