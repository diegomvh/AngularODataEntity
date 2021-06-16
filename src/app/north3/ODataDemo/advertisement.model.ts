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
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions, 
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
  
  
  @ModelField()
  Name?: string;
  
  
  @ModelField()
  AirDate!: any;
  
  
  @ModelField()
  FeaturedProduct?: FeaturedProductModel<FeaturedProduct>;
  public getFeaturedProduct({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<FeaturedProduct>('FeaturedProduct', {asEntity, ...options}) as Observable<FeaturedProductModel<FeaturedProduct>>;
  }
  public setFeaturedProduct(model: FeaturedProductModel<FeaturedProduct> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<FeaturedProduct>('FeaturedProduct', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}