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
import { Photo } from './photo.entity';
import { PhotoModel } from './photo.model';
import { PhotoCollection } from './photo.collection';
//#endregion

@Injectable()
export class PhotosService extends ODataEntitySetService<Photo> {
  constructor(protected client: ODataClient) {
    super(client, 'Photos', 'Microsoft.OData.SampleService.Models.TripPin.Photo');
  }

  //#region ODataApi Model
  photoModel(attrs?: Partial<Photo>): PhotoModel<Photo> {
    return this.entity().asModel<PhotoModel<Photo>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  photoCollection(models?: Partial<Photo>[]): PhotoCollection<Photo, PhotoModel<Photo>> {
    return this.entities().asCollection<PhotoModel<Photo>, PhotoCollection<Photo, PhotoModel<Photo>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
