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
  Expand, 
  Select,
  HttpOptions} from 'angular-odata';

//#region ODataApi Imports
import { MediaType } from '../CBS/Website/ODataApi/Models/mediatype.enum';
import { Medium } from '../CBS/Website/ODataApi/Models/medium.entity';
import { MediumModel } from '../CBS/Website/ODataApi/Models/medium.model';
import { MediumCollection } from '../CBS/Website/ODataApi/Models/medium.collection';
//#endregion

@Injectable()
export class MediaService extends ODataEntitySetService<Medium> {
  constructor(protected client: ODataClient) {
    super(client, 'Media', 'CBS.Website.ODataApi.Models.Medium');
  }

  //#region ODataApi Model
  mediumModel(attrs?: Partial<Medium>): MediumModel<Medium> {
    return this.entity().asModel<MediumModel<Medium>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  mediumCollection(models?: Partial<Medium>[]): MediumCollection<Medium, MediumModel<Medium>> {
    return this.entities().asCollection<MediumModel<Medium>, MediumCollection<Medium, MediumModel<Medium>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getMediaByMediaType(MediaType: MediaType, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{MediaType: MediaType}, Medium>(
      {MediaType}, 
      this.client.function<{MediaType: MediaType}, Medium>('Default.GetMediaByMediaType'), 
      'entities', {alias, ...options}) as Observable<Medium[] | null>;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
