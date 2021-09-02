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
  HttpQueryOptions, 
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
  public $CountryRegion() {
    return this.property<string>('CountryRegion');
  }
  public getCountryRegion(options?: HttpOptions) {
    return this.getValue<string>('CountryRegion', options) as Observable<string>;
  }
  
  @ModelField()
  Name!: string;
  public $Name() {
    return this.property<string>('Name');
  }
  public getName(options?: HttpOptions) {
    return this.getValue<string>('Name', options) as Observable<string>;
  }
  
  @ModelField()
  Region!: string;
  public $Region() {
    return this.property<string>('Region');
  }
  public getRegion(options?: HttpOptions) {
    return this.getValue<string>('Region', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}