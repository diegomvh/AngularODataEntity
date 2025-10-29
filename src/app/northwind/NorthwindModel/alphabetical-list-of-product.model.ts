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

import { AlphabeticalListOfProduct } from './alphabetical-list-of-product.entity';

@Model()
export class AlphabeticalListOfProductModel<E extends AlphabeticalListOfProduct> extends ODataModel<E> {
  @ModelField()
  declare ProductID: number;
  public $$ProductID() {
    return this.property<number>('ProductID');
  }
  public $ProductID() {
    return this.getAttribute<number>('ProductID') as number;
  }
  
  public ProductID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ProductID', options) as Observable<number>;
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
  declare SupplierID: number;
  public $$SupplierID() {
    return this.property<number>('SupplierID');
  }
  public $SupplierID() {
    return this.getAttribute<number>('SupplierID') as number;
  }
  
  public SupplierID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('SupplierID', options) as Observable<number>;
  }

  @ModelField()
  declare CategoryID: number;
  public $$CategoryID() {
    return this.property<number>('CategoryID');
  }
  public $CategoryID() {
    return this.getAttribute<number>('CategoryID') as number;
  }
  
  public CategoryID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('CategoryID', options) as Observable<number>;
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
  declare UnitPrice: number;
  public $$UnitPrice() {
    return this.property<number>('UnitPrice');
  }
  public $UnitPrice() {
    return this.getAttribute<number>('UnitPrice') as number;
  }
  
  public UnitPrice$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('UnitPrice', options) as Observable<number>;
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
  declare UnitsOnOrder: number;
  public $$UnitsOnOrder() {
    return this.property<number>('UnitsOnOrder');
  }
  public $UnitsOnOrder() {
    return this.getAttribute<number>('UnitsOnOrder') as number;
  }
  
  public UnitsOnOrder$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('UnitsOnOrder', options) as Observable<number>;
  }

  @ModelField()
  declare ReorderLevel: number;
  public $$ReorderLevel() {
    return this.property<number>('ReorderLevel');
  }
  public $ReorderLevel() {
    return this.getAttribute<number>('ReorderLevel') as number;
  }
  
  public ReorderLevel$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ReorderLevel', options) as Observable<number>;
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

  
  
  
}