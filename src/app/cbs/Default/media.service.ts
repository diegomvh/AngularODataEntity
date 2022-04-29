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
import { MediaType } from '../CBS/Website/ODataApi/Models/mediatype.enum';
import { Medium } from '../CBS/Website/ODataApi/Models/medium.entity';
import { MediumModel } from '../CBS/Website/ODataApi/Models/medium.model';
import { MediumCollection } from '../CBS/Website/ODataApi/Models/medium.collection';
//#endregion

@Injectable()
export class MediaService extends ODataEntitySetService<Medium> {
  constructor(client: ODataClient) {
    super(client, 'Media', 'CBS.Website.ODataApi.Models.Medium');
  }
  //#region ODataApiGen Model
  mediumModel(attrs?: Partial<Medium>): MediumModel<Medium> {
    return this.entity().asModel<MediumModel<Medium>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  mediumCollection(models?: Partial<Medium>[]): MediumCollection<Medium, MediumModel<Medium>> {
    return this.entities().asCollection<MediumModel<Medium>, MediumCollection<Medium, MediumModel<Medium>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  public getMediaByMediaType(): ODataFunctionResource<{MediaType: MediaType}, Medium> { 
    return this.client.function<{MediaType: MediaType}, Medium>('Default.GetMediaByMediaType', this.apiNameOrEntityType);
  }
  public callGetMediaByMediaType(MediaType: MediaType, options?: ODataQueryArgumentsOptions<Medium>) {
    return this.callFunction<{MediaType: MediaType}, Medium>(
      {MediaType}, 
      this.getMediaByMediaType(), 
      'entities', options) as Observable<ODataEntities<Medium>>;
  }
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
