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
import { Category } from './category.entity';
import { Supplier } from './supplier.entity';
import { CategoryModel } from './category.model';
import { SupplierModel } from './supplier.model';
import { ProductCollection } from './product.collection';
import { CategoryCollection } from './category.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

@Model()
export class ProductModel<E extends Product> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ID!: number;
  public $ID() {
    return this.property<number>('ID');
  }
  public getID(options?: HttpOptions) {
    return this.getValue<number>('ID', options) as Observable<number>;
  }
  
  @ModelField()
  Name?: string;
  public $Name() {
    return this.property<string>('Name');
  }
  public getName(options?: HttpOptions) {
    return this.getValue<string>('Name', options) as Observable<string>;
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
  ReleaseDate!: any;
  public $ReleaseDate() {
    return this.property<any>('ReleaseDate');
  }
  public getReleaseDate(options?: HttpOptions) {
    return this.getValue<any>('ReleaseDate', options) as Observable<any>;
  }
  
  @ModelField()
  DiscontinuedDate?: any;
  public $DiscontinuedDate() {
    return this.property<any>('DiscontinuedDate');
  }
  public getDiscontinuedDate(options?: HttpOptions) {
    return this.getValue<any>('DiscontinuedDate', options) as Observable<any>;
  }
  
  @ModelField()
  Rating!: number;
  public $Rating() {
    return this.property<number>('Rating');
  }
  public getRating(options?: HttpOptions) {
    return this.getValue<number>('Rating', options) as Observable<number>;
  }
  
  @ModelField()
  Price!: number;
  public $Price() {
    return this.property<number>('Price');
  }
  public getPrice(options?: HttpOptions) {
    return this.getValue<number>('Price', options) as Observable<number>;
  }
  
  @ModelField()
  Category?: CategoryModel<Category>;
  public $Category() {
    return this.navigationProperty<Category>('Category');
  }
  public getCategory() {
    return this.getReference<Category>('Category') as CategoryModel<Category>;
  }
  public setCategory(model: CategoryModel<Category> | null, options?: HttpOptions) {
    return this.setReference<Category>('Category', model, options);
  }
  @ModelField()
  Supplier?: SupplierModel<Supplier>;
  public $Supplier() {
    return this.navigationProperty<Supplier>('Supplier');
  }
  public getSupplier() {
    return this.getReference<Supplier>('Supplier') as SupplierModel<Supplier>;
  }
  public setSupplier(model: SupplierModel<Supplier> | null, options?: HttpOptions) {
    return this.setReference<Supplier>('Supplier', model, options);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}