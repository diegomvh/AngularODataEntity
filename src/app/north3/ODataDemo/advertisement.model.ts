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
import { FeaturedProduct } from './featuredproduct.entity';
import { Advertisement } from './advertisement.entity';
import { FeaturedProductModel } from './featuredproduct.model';
import { FeaturedProductCollection } from './featuredproduct.collection';
import { AdvertisementCollection } from './advertisement.collection';
//#endregion

@Model()
export class AdvertisementModel<E extends Advertisement> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ID!: string;
  public $ID() {
    return this.property<string>('ID');
  }
  public getID(options?: HttpOptions) {
    return this.getValue<string>('ID', options) as Observable<string>;
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
  AirDate!: any;
  public $AirDate() {
    return this.property<any>('AirDate');
  }
  public getAirDate(options?: HttpOptions) {
    return this.getValue<any>('AirDate', options) as Observable<any>;
  }
  
  @ModelField()
  FeaturedProduct?: FeaturedProductModel<FeaturedProduct>;
  public $FeaturedProduct() {
    return this.navigationProperty<FeaturedProduct>('FeaturedProduct');
  }
  public getFeaturedProduct() {
    return this.getReference<FeaturedProduct>('FeaturedProduct') as FeaturedProductModel<FeaturedProduct>;
  }
  public setFeaturedProduct(model: FeaturedProductModel<FeaturedProduct> | null, options?: HttpOptions) {
    return this.setReference<FeaturedProduct>('FeaturedProduct', model, options);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}