import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { City } from './city.complex';
import { CityCollection } from './city.collection';
//#endregion

@Model()
export class CityModel<E extends City> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  CountryRegion!: string;
  public $CountryRegion() {
    return this.property<string>('CountryRegion');
  }
  public getCountryRegion(options?: ODataOptions) {
    return this.getValue<string>('CountryRegion', options) as Observable<string>;
  }
  
  @ModelField()
  Name!: string;
  public $Name() {
    return this.property<string>('Name');
  }
  public getName(options?: ODataOptions) {
    return this.getValue<string>('Name', options) as Observable<string>;
  }
  
  @ModelField()
  Region!: string;
  public $Region() {
    return this.property<string>('Region');
  }
  public getRegion(options?: ODataOptions) {
    return this.getValue<string>('Region', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}