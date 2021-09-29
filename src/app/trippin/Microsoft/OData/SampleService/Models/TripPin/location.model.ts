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
import { Location } from './location.complex';
import { CityModel } from './city.model';
import { CityCollection } from './city.collection';
import { LocationCollection } from './location.collection';
//#endregion

@Model()
export class LocationModel<E extends Location> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  Address!: string;
  public $Address() {
    return this.property<string>('Address');
  }
  public getAddress(options?: ODataOptions) {
    return this.getValue<string>('Address', options) as Observable<string>;
  }
  
  @ModelField()
  City!: CityModel<City>;
  public $City() {
    return this.property<CityModel<City>>('City');
  }
  public getCity(options?: ODataOptions) {
    return this.getValue<CityModel<City>>('City', options) as Observable<CityModel<City>>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}