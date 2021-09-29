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
import { Product } from './product.entity';
import { ProductDetail } from './productdetail.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
import { ProductDetailCollection } from './productdetail.collection';
//#endregion

@Model()
export class ProductDetailModel<E extends ProductDetail> extends ODataModel<E> {
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
  Details?: string;
  public $Details() {
    return this.property<string>('Details');
  }
  public getDetails(options?: ODataOptions) {
    return this.getValue<string>('Details', options) as Observable<string>;
  }
  
  @ModelField()
  Product?: ProductModel<Product>;
  public $Product() {
    return this.navigationProperty<Product>('Product');
  }
  public getProduct() {
    return this.getReference<Product>('Product') as ProductModel<Product>;
  }
  public setProduct(model: ProductModel<Product> | null, options?: ODataOptions) {
    return this.setReference<Product>('Product', model, options);
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}