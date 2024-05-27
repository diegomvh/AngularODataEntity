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
import { Category } from './category.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
import { CategoryCollection } from './category.collection';
//#endregion

@Model()
export class CategoryModel<E extends Category> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  ID!: number;
  public $$ID() {
    return this.property<number>('ID');
  }
  public $ID() {
    return this.getAttribute<number>('ID') as number;
  }
  
  public ID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ID', options) as Observable<number>;
  }
  @ModelField()
  Name?: string;
  public $$Name() {
    return this.property<string>('Name');
  }
  public $Name() {
    return this.getAttribute<string>('Name') as string;
  }
  
  public Name$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Name', options) as Observable<string>;
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