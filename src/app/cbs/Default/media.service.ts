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
import { MediaType } from '../CBS/Website/ODataApi/Models/mediatype.enum';
import { Medium } from '../CBS/Website/ODataApi/Models/medium.entity';
//#endregion

@Injectable()
export class MediaService extends ODataEntityService<Medium> {
  constructor(protected client: ODataClient) {
    super(client, 'Media', 'CBS.Website.ODataApi.Models.Medium');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getMediaByMediaType(): ODataFunctionResource<{MediaType: MediaType}, Medium> {
    const resource = this.client.function<{MediaType: MediaType}, Medium>('Default.GetMediaByMediaType');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
