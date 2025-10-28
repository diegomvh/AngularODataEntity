import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
} from 'angular-odata';

import { Location } from './location.complex';
import { City } from './city.complex';
import { CityModel } from './city.model';

@Model()
export class LocationModel<E extends Location> extends ODataModel<E> {
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

  
  
  
}