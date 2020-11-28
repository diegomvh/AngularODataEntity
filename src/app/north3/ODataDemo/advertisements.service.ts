import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Advertisement } from './advertisement.entity';
import { AdvertisementModel } from './advertisement.model';
import { AdvertisementCollection } from './advertisement.collection';
//#endregion

@Injectable()
export class AdvertisementsService extends ODataEntityService<Advertisement> {
  constructor(protected client: ODataClient) {
    super(client, 'Advertisements', 'ODataDemo.Advertisement');
  }

  //#region ODataApi Model
  advertisementModel(): AdvertisementModel<Advertisement> {
    return super.model() as AdvertisementModel<Advertisement>;
  }
  //#endregion
  //#region ODataApi Collection
  advertisementCollection(): AdvertisementCollection<Advertisement, AdvertisementModel<Advertisement>> {
    return super.collection() as AdvertisementCollection<Advertisement, AdvertisementModel<Advertisement>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
