import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions, 
  Duration, 
} from 'angular-odata';//#endregion

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