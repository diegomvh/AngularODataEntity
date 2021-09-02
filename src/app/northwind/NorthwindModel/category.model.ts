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
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { CategoryCollection } from './category.collection';
import { ProductCollection } from './product.collection';
//#endregion

@Model()
export class CategoryModel<E extends Category> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  CategoryID!: number;
  public $CategoryID() {
    return this.property<number>('CategoryID');
  }
  public getCategoryID(options?: HttpOptions) {
    return this.getValue<number>('CategoryID', options) as Observable<number>;
  }
  
  @ModelField()
  CategoryName!: string;
  public $CategoryName() {
    return this.property<string>('CategoryName');
  }
  public getCategoryName(options?: HttpOptions) {
    return this.getValue<string>('CategoryName', options) as Observable<string>;
  }
  
  @ModelField()
  Description?: string;
  public $Description() {
    return this.property<string>('Description');
  }
  public getDescription(options?: HttpOptions) {
    return this.getValue<string>('Description', options) as Observable<string>;
  }
  
  @ModelField()
  Picture?: ArrayBuffer;
  public $Picture() {
    return this.property<ArrayBuffer>('Picture');
  }
  public getPicture(options?: HttpOptions) {
    return this.getValue<ArrayBuffer>('Picture', options) as Observable<ArrayBuffer>;
  }
  
  @ModelField()
  Products?: ProductCollection<Product, ProductModel<Product>>;
  public $Products() {
    return this.navigationProperty<Product>('Products');
  }
  public getProducts() {
    return this.getReference<Product>('Products') as ProductCollection<Product, ProductModel<Product>>;
  }
  public setProducts(model: ProductCollection<Product, ProductModel<Product>> | null, options?: HttpOptions) {
    return this.setReference<Product>('Products', model, options);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}