import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
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
  //#region ODataApi Properties
  @ModelField()
  ProductID!: number;
  
  
  @ModelField()
  ProductName!: string;
  
  
  @ModelField()
  SupplierID?: number;
  
  
  @ModelField()
  CategoryID?: number;
  
  
  @ModelField()
  QuantityPerUnit?: string;
  
  
  @ModelField()
  UnitPrice?: number;
  
  
  @ModelField()
  UnitsInStock?: number;
  
  
  @ModelField()
  UnitsOnOrder?: number;
  
  
  @ModelField()
  ReorderLevel?: number;
  
  
  @ModelField()
  Discontinued!: boolean;
  
  
  @ModelField()
  Category?: CategoryModel<Category>;
  public getCategory({asEntity, ...options}: {asEntity?: boolean} & HttpQueryOptions<Category> = {}) {
    return this.getReference<Category>('Category', {asEntity, ...options}) as Observable<CategoryModel<Category>>;
  }
  public setCategory(model: CategoryModel<Category> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Category>('Category', model, {asEntity, ...options});
  }
  @ModelField()
  Order_Details?: OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>;
  public getOrder_Details({asEntity, ...options}: {asEntity?: boolean} & HttpQueryOptions<OrderDetail> = {}) {
    return this.getReference<OrderDetail>('Order_Details', {asEntity, ...options}) as Observable<OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>>;
  }
  public setOrder_Details(model: OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<OrderDetail>('Order_Details', model, {asEntity, ...options});
  }
  @ModelField()
  Supplier?: SupplierModel<Supplier>;
  public getSupplier({asEntity, ...options}: {asEntity?: boolean} & HttpQueryOptions<Supplier> = {}) {
    return this.getReference<Supplier>('Supplier', {asEntity, ...options}) as Observable<SupplierModel<Supplier>>;
  }
  public setSupplier(model: SupplierModel<Supplier> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Supplier>('Supplier', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}