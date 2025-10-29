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

import { Product } from './product.entity';
import { Category } from './category.entity';
import { CategoryModel } from './category.model';
import { OrderDetail } from './order-detail.entity';
import { OrderDetailModel } from './order-detail.model';
import { OrderDetailCollection } from './order-detail.collection';
import { Supplier } from './supplier.entity';
import { SupplierModel } from './supplier.model';

@Model()
export class ProductModel<E extends Product> extends ODataModel<E> {
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
  declare Category?: CategoryModel<Category>;
  public $$Category() {
    return this.navigationProperty<Category>('Category');
  }
  public $Category() {
    return this.getAttribute<Category>('Category') as Category;
  }
  public Category$$(model: CategoryModel<Category> | null, options?: ODataOptions) {
    return this.setReference<Category>('Category', model, options);
  }
  public Category$(options?: ODataQueryArgumentsOptions<Category>) {
    return this.fetchAttribute<Category>('Category', options) as Observable<Category>;
  }

  @ModelField()
  declare Order_Details?: OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>;
  public $$Order_Details() {
    return this.navigationProperty<OrderDetail>('Order_Details');
  }
  public $Order_Details() {
    return this.getAttribute<OrderDetail>('Order_Details') as OrderDetail;
  }
  public Order_Details$$(model: OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>> | null, options?: ODataOptions) {
    return this.setReference<OrderDetail>('Order_Details', model, options);
  }
  public Order_Details$(options?: ODataQueryArgumentsOptions<OrderDetail>) {
    return this.fetchAttribute<OrderDetail>('Order_Details', options) as Observable<OrderDetail>;
  }

  @ModelField()
  declare Supplier?: SupplierModel<Supplier>;
  public $$Supplier() {
    return this.navigationProperty<Supplier>('Supplier');
  }
  public $Supplier() {
    return this.getAttribute<Supplier>('Supplier') as Supplier;
  }
  public Supplier$$(model: SupplierModel<Supplier> | null, options?: ODataOptions) {
    return this.setReference<Supplier>('Supplier', model, options);
  }
  public Supplier$(options?: ODataQueryArgumentsOptions<Supplier>) {
    return this.fetchAttribute<Supplier>('Supplier', options) as Observable<Supplier>;
  }

  
  
  
}