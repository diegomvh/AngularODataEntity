import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Product } from './product.entity';
import { ProductDetail } from './productdetail.entity';
import { Category } from './category.entity';
import { Supplier } from './supplier.entity';
import { ProductModel } from './product.model';
import { ProductDetailModel } from './productdetail.model';
import { CategoryModel } from './category.model';
import { SupplierModel } from './supplier.model';
import { ProductDetailCollection } from './productdetail.collection';
import { CategoryCollection } from './category.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

export class ProductCollection<E extends Product, M extends ProductModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}