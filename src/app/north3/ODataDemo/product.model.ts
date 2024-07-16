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
import { Category } from './category.entity';
import { Supplier } from './supplier.entity';
import { ProductDetailModel } from './product-detail.model';
import { CategoryModel } from './category.model';
import { SupplierModel } from './supplier.model';
import { ProductCollection } from './product.collection';
import { ProductDetailCollection } from './product-detail.collection';
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
  Categories?: CategoryCollection<Category, CategoryModel<Category>>;
  public $$Categories() {
    return this.navigationProperty<Category>('Categories');
  }
  public $Categories() {
    return this.getAttribute<Category>('Categories') as CategoryCollection<Category, CategoryModel<Category>>;
  }
  public Categories$$(model: CategoryCollection<Category, CategoryModel<Category>> | null, options?: ODataOptions) {
    return this.setReference<Category>('Categories', model, options);
  }
  public Categories$(options?: ODataQueryArgumentsOptions<Category>) {
      return this.fetchAttribute<Category>('Categories', options) as Observable<CategoryCollection<Category, CategoryModel<Category>>>;
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
  @ModelField()
  ProductDetail?: ProductDetailModel<ProductDetail>;
  public $$ProductDetail() {
    return this.navigationProperty<ProductDetail>('ProductDetail');
  }
  public $ProductDetail() {
    return this.getAttribute<ProductDetail>('ProductDetail') as ProductDetailModel<ProductDetail>;
  }
  public ProductDetail$$(model: ProductDetailModel<ProductDetail> | null, options?: ODataOptions) {
    return this.setReference<ProductDetail>('ProductDetail', model, options);
  }
  public ProductDetail$(options?: ODataQueryArgumentsOptions<ProductDetail>) {
      return this.fetchAttribute<ProductDetail>('ProductDetail', options) as Observable<ProductDetailModel<ProductDetail>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}