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
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Product } from './product.entity';
import { ProductDetail } from './productdetail.entity';
import { Category } from './category.entity';
import { Supplier } from './supplier.entity';
import { ProductDetailModel } from './productdetail.model';
import { CategoryModel } from './category.model';
import { SupplierModel } from './supplier.model';
import { ProductCollection } from './product.collection';
import { ProductDetailCollection } from './productdetail.collection';
import { CategoryCollection } from './category.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

@Model()
export class ProductModel<E extends Product> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ID!: number;
  
  
  @ModelField()
  Name?: string;
  
  
  @ModelField()
  Description?: string;
  
  
  @ModelField()
  ReleaseDate!: any;
  
  
  @ModelField()
  DiscontinuedDate?: any;
  
  
  @ModelField()
  Rating!: number;
  
  
  @ModelField()
  Price!: number;
  
  
  @ModelField()
  Categories?: CategoryCollection<Category, CategoryModel<Category>>;
  
  
  @ModelField()
  Supplier?: SupplierModel<Supplier>;
  public getSupplier({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Supplier>('Supplier', {asEntity, ...options}) as Observable<SupplierModel<Supplier>>;
  }
  public setSupplier(model: SupplierModel<Supplier> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Supplier>('Supplier', model, {asEntity, ...options});
  }
  @ModelField()
  ProductDetail?: ProductDetailModel<ProductDetail>;
  public getProductDetail({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<ProductDetail>('ProductDetail', {asEntity, ...options}) as Observable<ProductDetailModel<ProductDetail>>;
  }
  public setProductDetail(model: ProductDetailModel<ProductDetail> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<ProductDetail>('ProductDetail', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}