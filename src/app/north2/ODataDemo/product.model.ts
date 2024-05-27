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
import { Supplier } from './supplier.entity';
import { CategoryModel } from './category.model';
import { SupplierModel } from './supplier.model';
import { ProductCollection } from './product.collection';
import { CategoryCollection } from './category.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

@Model()
export class ProductModel<E extends Product> extends ODataModel<E> {
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
  ReleaseDate!: any;
  public $$ReleaseDate() {
    return this.property<any>('ReleaseDate');
  }
  public $ReleaseDate() {
    return this.getAttribute<any>('ReleaseDate') as any;
  }
  
  public ReleaseDate$(options?: ODataQueryArgumentsOptions<any>) {
    return this.fetchAttribute<any>('ReleaseDate', options) as Observable<any>;
  }
  @ModelField()
  DiscontinuedDate?: any;
  public $$DiscontinuedDate() {
    return this.property<any>('DiscontinuedDate');
  }
  public $DiscontinuedDate() {
    return this.getAttribute<any>('DiscontinuedDate') as any;
  }
  
  public DiscontinuedDate$(options?: ODataQueryArgumentsOptions<any>) {
    return this.fetchAttribute<any>('DiscontinuedDate', options) as Observable<any>;
  }
  @ModelField()
  Rating!: number;
  public $$Rating() {
    return this.property<number>('Rating');
  }
  public $Rating() {
    return this.getAttribute<number>('Rating') as number;
  }
  
  public Rating$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Rating', options) as Observable<number>;
  }
  @ModelField()
  Price!: number;
  public $$Price() {
    return this.property<number>('Price');
  }
  public $Price() {
    return this.getAttribute<number>('Price') as number;
  }
  
  public Price$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Price', options) as Observable<number>;
  }
  @ModelField()
  Category?: CategoryModel<Category>;
  public $$Category() {
    return this.navigationProperty<Category>('Category');
  }
  public $Category() {
    return this.getAttribute<Category>('Category') as CategoryModel<Category>;
  }
  public Category$$(model: CategoryModel<Category> | null, options?: ODataOptions) {
    return this.setReference<Category>('Category', model, options);
  }
  public Category$(options?: ODataQueryArgumentsOptions<Category>) {
      return this.fetchAttribute<Category>('Category', options) as Observable<CategoryModel<Category>>;
    }
  @ModelField()
  Supplier?: SupplierModel<Supplier>;
  public $$Supplier() {
    return this.navigationProperty<Supplier>('Supplier');
  }
  public $Supplier() {
    return this.getAttribute<Supplier>('Supplier') as SupplierModel<Supplier>;
  }
  public Supplier$$(model: SupplierModel<Supplier> | null, options?: ODataOptions) {
    return this.setReference<Supplier>('Supplier', model, options);
  }
  public Supplier$(options?: ODataQueryArgumentsOptions<Supplier>) {
      return this.fetchAttribute<Supplier>('Supplier', options) as Observable<SupplierModel<Supplier>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}