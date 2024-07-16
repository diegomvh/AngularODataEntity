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
import { Product } from './product.entity';
import { ProductDetail } from './product-detail.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
import { ProductDetailCollection } from './product-detail.collection';
//#endregion

@Model()
export class ProductDetailModel<E extends ProductDetail> extends ODataModel<E> {
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
  Details?: string;
  public $$Details() {
    return this.property<string>('Details');
  }
  public $Details() {
    return this.getAttribute<string>('Details') as string;
  }
  
  public Details$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Details', options) as Observable<string>;
  }
  @ModelField()
  Product?: ProductModel<Product>;
  public $$Product() {
    return this.navigationProperty<Product>('Product');
  }
  public $Product() {
    return this.getAttribute<Product>('Product') as ProductModel<Product>;
  }
  public Product$$(model: ProductModel<Product> | null, options?: ODataOptions) {
    return this.setReference<Product>('Product', model, options);
  }
  public Product$(options?: ODataQueryArgumentsOptions<Product>) {
      return this.fetchAttribute<Product>('Product', options) as Observable<ProductModel<Product>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}