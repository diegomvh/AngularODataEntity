import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryableOptions,
  ODataFunctionOptions,
  ODataActionOptions,
} from 'angular-odata';

import { Location } from './location.complex';
import { City } from './city.complex';
import { CityModel } from './city.model';

// #region Custom
// #endregion Custom
@Model()
export class LocationModel<E extends Location> extends ODataModel<E> {
  @ModelField()
  declare Address: string;
  public $$Address() {
    return this.property<string>('Address');
  }
  public $Address() {
    return this.getAttribute<string>('Address') as string;
  }
  public Address$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('Address', options) as Observable<string>;
  }

  @ModelField()
  declare City: CityModel<City>;
  public $$City() {
    return this.property<CityModel<City>>('City');
  }
  public $City() {
    return this.getAttribute<CityModel<City>>('City') as CityModel<City>;
  }
  public City$(options?: ODataQueryableOptions<CityModel<City>>) {
    return this.fetchAttribute<CityModel<City>>('City', options) as Observable<CityModel<City>>;
  }

  // #region Custom
  // #endregion Custom
}
// #region Custom
// #endregion Custom
