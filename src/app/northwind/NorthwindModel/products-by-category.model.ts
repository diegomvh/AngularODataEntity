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

import { ProductsByCategory } from './products-by-category.entity';

@Model()
export class ProductsByCategoryModel<E extends ProductsByCategory> extends ODataModel<E> {
  @ModelField()
  declare CategoryName: string;
  public $$CategoryName() {
    return this.property<string>('CategoryName');
  }
  public $CategoryName() {
    return this.getAttribute<string>('CategoryName') as string;
  }
  
  public CategoryName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('CategoryName', options) as Observable<string>;
  }

  @ModelField()
  declare ProductName: string;
  public $$ProductName() {
    return this.property<string>('ProductName');
  }
  public $ProductName() {
    return this.getAttribute<string>('ProductName') as string;
  }
  
  public ProductName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ProductName', options) as Observable<string>;
  }

  @ModelField()
  declare QuantityPerUnit: string;
  public $$QuantityPerUnit() {
    return this.property<string>('QuantityPerUnit');
  }
  public $QuantityPerUnit() {
    return this.getAttribute<string>('QuantityPerUnit') as string;
  }
  
  public QuantityPerUnit$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('QuantityPerUnit', options) as Observable<string>;
  }

  @ModelField()
  declare UnitsInStock: number;
  public $$UnitsInStock() {
    return this.property<number>('UnitsInStock');
  }
  public $UnitsInStock() {
    return this.getAttribute<number>('UnitsInStock') as number;
  }
  
  public UnitsInStock$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('UnitsInStock', options) as Observable<number>;
  }

  @ModelField()
  declare Discontinued: boolean;
  public $$Discontinued() {
    return this.property<boolean>('Discontinued');
  }
  public $Discontinued() {
    return this.getAttribute<boolean>('Discontinued') as boolean;
  }
  
  public Discontinued$(options?: ODataQueryArgumentsOptions<boolean>) {
    return this.fetchAttribute<boolean>('Discontinued', options) as Observable<boolean>;
  }

  
  
  
}