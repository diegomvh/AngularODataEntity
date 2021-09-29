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
  public $ID() {
    return this.property<number>('ID');
  }
  public getID(options?: ODataOptions) {
    return this.getValue<number>('ID', options) as Observable<number>;
  }
  
  @ModelField()
  Name?: string;
  public $Name() {
    return this.property<string>('Name');
  }
  public getName(options?: ODataOptions) {
    return this.getValue<string>('Name', options) as Observable<string>;
  }
  
  @ModelField()
  Products?: ProductCollection<Product, ProductModel<Product>>;
  public $Products() {
    return this.navigationProperty<Product>('Products');
  }
  public getProducts() {
    return this.getReference<Product>('Products') as ProductCollection<Product, ProductModel<Product>>;
  }
  public setProducts(model: ProductCollection<Product, ProductModel<Product>> | null, options?: ODataOptions) {
    return this.setReference<Product>('Products', model, options);
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}