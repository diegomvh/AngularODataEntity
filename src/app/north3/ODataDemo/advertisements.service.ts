import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
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
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Advertisement } from './advertisement.entity';
import { AdvertisementModel } from './advertisement.model';
import { AdvertisementCollection } from './advertisement.collection';
//#endregion

@Injectable()
export class AdvertisementsService extends ODataEntitySetService<Advertisement> {
  constructor(client: ODataClient) {
    super(client, 'Advertisements', 'ODataDemo.Advertisement');
  }
  //#region ODataApiGen Model
  advertisementModel(attrs?: Partial<Advertisement>): AdvertisementModel<Advertisement> {
    return this.entity().asModel<AdvertisementModel<Advertisement>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  advertisementCollection(models?: Partial<Advertisement>[]): AdvertisementCollection<Advertisement, AdvertisementModel<Advertisement>> {
    return this.entities().asCollection<AdvertisementModel<Advertisement>, AdvertisementCollection<Advertisement, AdvertisementModel<Advertisement>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
