import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataClient,
  ODataEntitySetService, 
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
  Expand, 
  Select,
  HttpOptions,
  HttpQueryOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Advertisement } from './advertisement.entity';
import { AdvertisementModel } from './advertisement.model';
import { AdvertisementCollection } from './advertisement.collection';
//#endregion

@Injectable()
export class AdvertisementsService extends ODataEntitySetService<Advertisement> {
  constructor(protected client: ODataClient) {
    super(client, 'Advertisements', 'ODataDemo.Advertisement');
  }
  //#region ODataApi Model
  advertisementModel(attrs?: Partial<Advertisement>): AdvertisementModel<Advertisement> {
    return this.entity().asModel<AdvertisementModel<Advertisement>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  advertisementCollection(models?: Partial<Advertisement>[]): AdvertisementCollection<Advertisement, AdvertisementModel<Advertisement>> {
    return this.entities().asCollection<AdvertisementModel<Advertisement>, AdvertisementCollection<Advertisement, AdvertisementModel<Advertisement>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
