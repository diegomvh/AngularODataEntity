import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  public getAdvertisement({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Advertisement>('Advertisement', {asEntity, ...options}) as Observable<AdvertisementModel<Advertisement>>;
  }
  public setAdvertisement(model: AdvertisementModel<Advertisement> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Advertisement>('Advertisement', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}