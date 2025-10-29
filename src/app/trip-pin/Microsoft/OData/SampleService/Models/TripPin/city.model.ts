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

import { City } from './city.complex';

@Model()
export class CityModel<E extends City> extends ODataModel<E> {
  @ModelField()
  declare CountryRegion: string;
  public $$CountryRegion() {
    return this.property<string>('CountryRegion');
  }
  public $CountryRegion() {
    return this.getAttribute<string>('CountryRegion') as string;
  }
  
  public CountryRegion$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('CountryRegion', options) as Observable<string>;
  }

  @ModelField()
  declare Name: string;
  public $$Name() {
    return this.property<string>('Name');
  }
  public $Name() {
    return this.getAttribute<string>('Name') as string;
  }
  
  public Name$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Name', options) as Observable<string>;
  }

  @ModelField()
  declare Region: string;
  public $$Region() {
    return this.property<string>('Region');
  }
  public $Region() {
    return this.getAttribute<string>('Region') as string;
  }
  
  public Region$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Region', options) as Observable<string>;
  }

  
  
  
}