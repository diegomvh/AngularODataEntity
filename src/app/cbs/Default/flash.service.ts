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
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Flash } from '../CBS/Website/ODataApi/Models/flash.entity';
import { FlashModel } from '../CBS/Website/ODataApi/Models/flash.model';
import { FlashCollection } from '../CBS/Website/ODataApi/Models/flash.collection';
//#endregion

@Injectable()
export class FlashService extends ODataEntitySetService<Flash> {
  constructor(client: ODataClient) {
    super(client, 'Flash', 'CBS.Website.ODataApi.Models.Flash');
  }
  //#region ODataApiGen Model
  flashModel(attrs?: Partial<Flash>): FlashModel<Flash> {
    return this.entity().asModel<FlashModel<Flash>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  flashCollection(models?: Partial<Flash>[]): FlashCollection<Flash, FlashModel<Flash>> {
    return this.entities().asCollection<FlashModel<Flash>, FlashCollection<Flash, FlashModel<Flash>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
