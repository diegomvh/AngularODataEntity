import { ODataModel, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

export class ProductModel<E extends Product> extends ODataModel<E> {
  //#region ODataApi Properties
  productID: number;
  productName: string;
  supplierID?: number;
  categoryID?: number;
  quantityPerUnit?: string;
  unitPrice?: number;
  unitsInStock?: number;
  unitsOnOrder?: number;
  reorderLevel?: number;
  discontinued: boolean;
  category?: CategoryModel<Category>;
  orderDetails?: Order_DetailCollection<Order_Detail, Order_DetailModel<Order_Detail>>;
  supplier?: SupplierModel<Supplier>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public setCategory(model: CategoryModel<Category> | null): Observable<this> {
    return this.setNavigationProperty<Category, CategoryModel<Category>>('Category', model);
  }
  public setSupplier(model: SupplierModel<Supplier> | null): Observable<this> {
    return this.setNavigationProperty<Supplier, SupplierModel<Supplier>>('Supplier', model);
  }
  //#endregion
}