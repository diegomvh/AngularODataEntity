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
import { Photo } from './photo.entity';
import { PhotoModel } from './photo.model';
import { PhotoCollection } from './photo.collection';
//#endregion

@Injectable()
export class PhotosService extends ODataEntityService<Photo> {
  constructor(protected client: ODataClient) {
    super(client, 'Photos', 'Microsoft.OData.SampleService.Models.TripPin.Photo');
  }

  //#region ODataApi Model
  photoModel(): PhotoModel<Photo> {
    return this.entity().asModel() as PhotoModel<Photo>;
  }
  //#endregion
  //#region ODataApi Collection
  photoCollection(): PhotoCollection<Photo, PhotoModel<Photo>> {
    return this.entities().asCollection() as PhotoCollection<Photo, PhotoModel<Photo>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
