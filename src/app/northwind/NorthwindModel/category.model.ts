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
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { CategoryCollection } from './category.collection';
import { ProductCollection } from './product.collection';
//#endregion

@Model()
export class CategoryModel<E extends Category> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  CategoryID!: number;
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
  CategoryName!: string;
  public $$CategoryName() {
    return this.property<string>('CategoryName');
  }
  public $CategoryName() {
    return this.getAttribute<string>('CategoryName') as string;
  }
  
  public CategoryName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('CategoryName', options) as Observable<string>;
  }
  @ModelField()
  Description?: string;
  public $$Description() {
    return this.property<string>('Description');
  }
  public $Description() {
    return this.getAttribute<string>('Description') as string;
  }
  
  public Description$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Description', options) as Observable<string>;
  }
  @ModelField()
  Picture?: ArrayBuffer;
  public $$Picture() {
    return this.property<ArrayBuffer>('Picture');
  }
  public $Picture() {
    return this.getAttribute<ArrayBuffer>('Picture') as ArrayBuffer;
  }
  
  public Picture$(options?: ODataQueryArgumentsOptions<ArrayBuffer>) {
    return this.fetchAttribute<ArrayBuffer>('Picture', options) as Observable<ArrayBuffer>;
  }
  @ModelField()
  Products?: ProductCollection<Product, ProductModel<Product>>;
  public $$Products() {
    return this.navigationProperty<Product>('Products');
  }
  public $Products() {
    return this.getAttribute<Product>('Products') as ProductCollection<Product, ProductModel<Product>>;
  }
  public Products$$(model: ProductCollection<Product, ProductModel<Product>> | null, options?: ODataOptions) {
    return this.setReference<Product>('Products', model, options);
  }
  public Products$(options?: ODataQueryArgumentsOptions<Product>) {
      return this.fetchAttribute<Product>('Products', options) as Observable<ProductCollection<Product, ProductModel<Product>>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}