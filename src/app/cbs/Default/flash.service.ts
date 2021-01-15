import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Flash } from '../CBS/Website/ODataApi/Models/flash.entity';
import { FlashModel } from '../CBS/Website/ODataApi/Models/flash.model';
import { FlashCollection } from '../CBS/Website/ODataApi/Models/flash.collection';
//#endregion

@Injectable()
export class FlashService extends ODataEntitySetService<Flash> {
  constructor(protected client: ODataClient) {
    super(client, 'Flash', 'CBS.Website.ODataApi.Models.Flash');
  }

  //#region ODataApi Model
  flashModel(attrs?: Partial<Flash>): FlashModel<Flash> {
    return this.entity().asModel(attrs || {}) as FlashModel<Flash>;
  }
  //#endregion
  //#region ODataApi Collection
  flashCollection(models?: Partial<Flash>[]): FlashCollection<Flash, FlashModel<Flash>> {
    return this.entities().asCollection(models || []) as FlashCollection<Flash, FlashModel<Flash>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
