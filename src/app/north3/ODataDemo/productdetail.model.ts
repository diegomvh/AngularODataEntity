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
import { Product } from './product.entity';
import { ProductDetail } from './productdetail.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
import { ProductDetailCollection } from './productdetail.collection';
//#endregion

@Model()
export class ProductDetailModel<E extends ProductDetail> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ProductID!: number;
  
  
  @ModelField()
  Details?: string;
  
  
  @ModelField()
  Product?: ProductModel<Product>;
  public getProduct({asEntity, ...options}: {asEntity?: boolean} & HttpQueryOptions<Product> = {}) {
    return this.getReference<Product>('Product', {asEntity, ...options}) as Observable<ProductModel<Product>>;
  }
  public setProduct(model: ProductModel<Product> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Product>('Product', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}