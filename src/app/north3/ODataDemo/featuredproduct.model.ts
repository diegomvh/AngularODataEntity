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
import { ProductModel } from './product.model';
import { FeaturedProduct } from './featuredproduct.entity';
import { Advertisement } from './advertisement.entity';
import { AdvertisementModel } from './advertisement.model';
import { FeaturedProductCollection } from './featuredproduct.collection';
import { AdvertisementCollection } from './advertisement.collection';
//#endregion

@Model()
export class FeaturedProductModel<E extends FeaturedProduct> extends ProductModel<E> {
  //#region ODataApi Properties
  @ModelField()
  Advertisement?: AdvertisementModel<Advertisement>;
  public $Advertisement() {
    return this.navigationProperty<Advertisement>('Advertisement');
  }
  public getAdvertisement() {
    return this.getReference<Advertisement>('Advertisement') as AdvertisementModel<Advertisement>;
  }
  public setAdvertisement(model: AdvertisementModel<Advertisement> | null, options?: HttpOptions) {
    return this.setReference<Advertisement>('Advertisement', model, options);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}