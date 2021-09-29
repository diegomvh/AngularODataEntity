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
import { Category } from './category.entity';
import { OrderDetail } from './order_detail.entity';
import { Product } from './product.entity';
import { Supplier } from './supplier.entity';
import { CategoryModel } from './category.model';
import { OrderDetailModel } from './order_detail.model';
import { SupplierModel } from './supplier.model';
import { CategoryCollection } from './category.collection';
import { OrderDetailCollection } from './order_detail.collection';
import { ProductCollection } from './product.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

@Model()
export class ProductModel<E extends Product> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  ProductID!: number;
  public $ProductID() {
    return this.property<number>('ProductID');
  }
  public getProductID(options?: ODataOptions) {
    return this.getValue<number>('ProductID', options) as Observable<number>;
  }
  
  @ModelField()
  ProductName!: string;
  public $ProductName() {
    return this.property<string>('ProductName');
  }
  public getProductName(options?: ODataOptions) {
    return this.getValue<string>('ProductName', options) as Observable<string>;
  }
  
  @ModelField()
  SupplierID?: number;
  public $SupplierID() {
    return this.property<number>('SupplierID');
  }
  public getSupplierID(options?: ODataOptions) {
    return this.getValue<number>('SupplierID', options) as Observable<number>;
  }
  
  @ModelField()
  CategoryID?: number;
  public $CategoryID() {
    return this.property<number>('CategoryID');
  }
  public getCategoryID(options?: ODataOptions) {
    return this.getValue<number>('CategoryID', options) as Observable<number>;
  }
  
  @ModelField()
  QuantityPerUnit?: string;
  public $QuantityPerUnit() {
    return this.property<string>('QuantityPerUnit');
  }
  public getQuantityPerUnit(options?: ODataOptions) {
    return this.getValue<string>('QuantityPerUnit', options) as Observable<string>;
  }
  
  @ModelField()
  UnitPrice?: number;
  public $UnitPrice() {
    return this.property<number>('UnitPrice');
  }
  public getUnitPrice(options?: ODataOptions) {
    return this.getValue<number>('UnitPrice', options) as Observable<number>;
  }
  
  @ModelField()
  UnitsInStock?: number;
  public $UnitsInStock() {
    return this.property<number>('UnitsInStock');
  }
  public getUnitsInStock(options?: ODataOptions) {
    return this.getValue<number>('UnitsInStock', options) as Observable<number>;
  }
  
  @ModelField()
  UnitsOnOrder?: number;
  public $UnitsOnOrder() {
    return this.property<number>('UnitsOnOrder');
  }
  public getUnitsOnOrder(options?: ODataOptions) {
    return this.getValue<number>('UnitsOnOrder', options) as Observable<number>;
  }
  
  @ModelField()
  ReorderLevel?: number;
  public $ReorderLevel() {
    return this.property<number>('ReorderLevel');
  }
  public getReorderLevel(options?: ODataOptions) {
    return this.getValue<number>('ReorderLevel', options) as Observable<number>;
  }
  
  @ModelField()
  Discontinued!: boolean;
  public $Discontinued() {
    return this.property<boolean>('Discontinued');
  }
  public getDiscontinued(options?: ODataOptions) {
    return this.getValue<boolean>('Discontinued', options) as Observable<boolean>;
  }
  
  @ModelField()
  Category?: CategoryModel<Category>;
  public $Category() {
    return this.navigationProperty<Category>('Category');
  }
  public getCategory() {
    return this.getReference<Category>('Category') as CategoryModel<Category>;
  }
  public setCategory(model: CategoryModel<Category> | null, options?: ODataOptions) {
    return this.setReference<Category>('Category', model, options);
  }
  @ModelField()
  Order_Details?: OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>;
  public $Order_Details() {
    return this.navigationProperty<OrderDetail>('Order_Details');
  }
  public getOrder_Details() {
    return this.getReference<OrderDetail>('Order_Details') as OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>;
  }
  public setOrder_Details(model: OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>> | null, options?: ODataOptions) {
    return this.setReference<OrderDetail>('Order_Details', model, options);
  }
  @ModelField()
  Supplier?: SupplierModel<Supplier>;
  public $Supplier() {
    return this.navigationProperty<Supplier>('Supplier');
  }
  public getSupplier() {
    return this.getReference<Supplier>('Supplier') as SupplierModel<Supplier>;
  }
  public setSupplier(model: SupplierModel<Supplier> | null, options?: ODataOptions) {
    return this.setReference<Supplier>('Supplier', model, options);
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}