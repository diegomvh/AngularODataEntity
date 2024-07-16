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
import { Category } from './category.entity';
import { OrderDetail } from './order-detail.entity';
import { Product } from './product.entity';
import { Supplier } from './supplier.entity';
import { CategoryModel } from './category.model';
import { OrderDetailModel } from './order-detail.model';
import { SupplierModel } from './supplier.model';
import { CategoryCollection } from './category.collection';
import { OrderDetailCollection } from './order-detail.collection';
import { ProductCollection } from './product.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

@Model()
export class ProductModel<E extends Product> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  ProductID!: number;
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
  ProductName!: string;
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
  SupplierID?: number;
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
  CategoryID?: number;
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
  QuantityPerUnit?: string;
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
  UnitPrice?: number;
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
  UnitsInStock?: number;
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
  UnitsOnOrder?: number;
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
  ReorderLevel?: number;
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
  Discontinued!: boolean;
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
  Category?: CategoryModel<Category>;
  public $$Category() {
    return this.navigationProperty<Category>('Category');
  }
  public $Category() {
    return this.getAttribute<Category>('Category') as CategoryModel<Category>;
  }
  public Category$$(model: CategoryModel<Category> | null, options?: ODataOptions) {
    return this.setReference<Category>('Category', model, options);
  }
  public Category$(options?: ODataQueryArgumentsOptions<Category>) {
      return this.fetchAttribute<Category>('Category', options) as Observable<CategoryModel<Category>>;
    }
  @ModelField()
  Order_Details?: OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>;
  public $$Order_Details() {
    return this.navigationProperty<OrderDetail>('Order_Details');
  }
  public $Order_Details() {
    return this.getAttribute<OrderDetail>('Order_Details') as OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>;
  }
  public Order_Details$$(model: OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>> | null, options?: ODataOptions) {
    return this.setReference<OrderDetail>('Order_Details', model, options);
  }
  public Order_Details$(options?: ODataQueryArgumentsOptions<OrderDetail>) {
      return this.fetchAttribute<OrderDetail>('Order_Details', options) as Observable<OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>>;
    }
  @ModelField()
  Supplier?: SupplierModel<Supplier>;
  public $$Supplier() {
    return this.navigationProperty<Supplier>('Supplier');
  }
  public $Supplier() {
    return this.getAttribute<Supplier>('Supplier') as SupplierModel<Supplier>;
  }
  public Supplier$$(model: SupplierModel<Supplier> | null, options?: ODataOptions) {
    return this.setReference<Supplier>('Supplier', model, options);
  }
  public Supplier$(options?: ODataQueryArgumentsOptions<Supplier>) {
      return this.fetchAttribute<Supplier>('Supplier', options) as Observable<SupplierModel<Supplier>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}