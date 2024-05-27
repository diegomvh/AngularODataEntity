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
import { FeaturedProduct } from './featuredproduct.entity';
import { Advertisement } from './advertisement.entity';
import { FeaturedProductModel } from './featuredproduct.model';
import { FeaturedProductCollection } from './featuredproduct.collection';
import { AdvertisementCollection } from './advertisement.collection';
//#endregion

@Model()
export class AdvertisementModel<E extends Advertisement> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  ID!: string;
  public $$ID() {
    return this.property<string>('ID');
  }
  public $ID() {
    return this.getAttribute<string>('ID') as string;
  }
  
  public ID$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ID', options) as Observable<string>;
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
  AirDate!: any;
  public $$AirDate() {
    return this.property<any>('AirDate');
  }
  public $AirDate() {
    return this.getAttribute<any>('AirDate') as any;
  }
  
  public AirDate$(options?: ODataQueryArgumentsOptions<any>) {
    return this.fetchAttribute<any>('AirDate', options) as Observable<any>;
  }
  @ModelField()
  FeaturedProduct?: FeaturedProductModel<FeaturedProduct>;
  public $$FeaturedProduct() {
    return this.navigationProperty<FeaturedProduct>('FeaturedProduct');
  }
  public $FeaturedProduct() {
    return this.getAttribute<FeaturedProduct>('FeaturedProduct') as FeaturedProductModel<FeaturedProduct>;
  }
  public FeaturedProduct$$(model: FeaturedProductModel<FeaturedProduct> | null, options?: ODataOptions) {
    return this.setReference<FeaturedProduct>('FeaturedProduct', model, options);
  }
  public FeaturedProduct$(options?: ODataQueryArgumentsOptions<FeaturedProduct>) {
      return this.fetchAttribute<FeaturedProduct>('FeaturedProduct', options) as Observable<FeaturedProductModel<FeaturedProduct>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}