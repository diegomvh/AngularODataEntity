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
import { ProductModel } from './product.model';
import { FeaturedProduct } from './featuredproduct.entity';
import { Advertisement } from './advertisement.entity';
import { AdvertisementModel } from './advertisement.model';
import { FeaturedProductCollection } from './featuredproduct.collection';
import { AdvertisementCollection } from './advertisement.collection';
//#endregion

@Model()
export class FeaturedProductModel<E extends FeaturedProduct> extends ProductModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  Advertisement?: AdvertisementModel<Advertisement>;
  public $$Advertisement() {
    return this.navigationProperty<Advertisement>('Advertisement');
  }
  public $Advertisement() {
    return this.getAttribute<Advertisement>('Advertisement') as AdvertisementModel<Advertisement>;
  }
  public Advertisement$$(model: AdvertisementModel<Advertisement> | null, options?: ODataOptions) {
    return this.setReference<Advertisement>('Advertisement', model, options);
  }
  public Advertisement$(options?: ODataQueryArgumentsOptions<Advertisement>) {
      return this.fetchAttribute<Advertisement>('Advertisement', options) as Observable<AdvertisementModel<Advertisement>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}