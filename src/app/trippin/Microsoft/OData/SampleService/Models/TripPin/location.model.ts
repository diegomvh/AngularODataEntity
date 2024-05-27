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
  ODataFunctionOptions,
  ODataActionOptions,
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
  public $$Address() {
    return this.property<string>('Address');
  }
  public $Address() {
    return this.getAttribute<string>('Address') as string;
  }
  
  public Address$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Address', options) as Observable<string>;
  }
  @ModelField()
  City!: CityModel<City>;
  public $$City() {
    return this.property<CityModel<City>>('City');
  }
  public $City() {
    return this.getAttribute<CityModel<City>>('City') as CityModel<City>;
  }
  
  public City$(options?: ODataQueryArgumentsOptions<CityModel<City>>) {
    return this.fetchAttribute<CityModel<City>>('City', options) as Observable<CityModel<City>>;
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}