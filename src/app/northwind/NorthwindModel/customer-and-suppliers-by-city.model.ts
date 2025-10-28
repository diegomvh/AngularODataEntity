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

import { CustomerAndSuppliersByCity } from './customer-and-suppliers-by-city.entity';

@Model()
export class CustomerAndSuppliersByCityModel<E extends CustomerAndSuppliersByCity> extends ODataModel<E> {
  @ModelField()
  City!: string;
  public $$City() {
    return this.property<string>('City');
  }
  public $City() {
    return this.getAttribute<string>('City') as string;
  }
  
  public City$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('City', options) as Observable<string>;
  }

  @ModelField()
  CompanyName!: string;
  public $$CompanyName() {
    return this.property<string>('CompanyName');
  }
  public $CompanyName() {
    return this.getAttribute<string>('CompanyName') as string;
  }
  
  public CompanyName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('CompanyName', options) as Observable<string>;
  }

  @ModelField()
  ContactName!: string;
  public $$ContactName() {
    return this.property<string>('ContactName');
  }
  public $ContactName() {
    return this.getAttribute<string>('ContactName') as string;
  }
  
  public ContactName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ContactName', options) as Observable<string>;
  }

  @ModelField()
  Relationship!: string;
  public $$Relationship() {
    return this.property<string>('Relationship');
  }
  public $Relationship() {
    return this.getAttribute<string>('Relationship') as string;
  }
  
  public Relationship$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Relationship', options) as Observable<string>;
  }

  
  
  
}