import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { PhotoModel } from './photo.model';
import { PhotoCollection } from './photo.collection';
import { Photo } from './photo.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class PhotosService extends ODataEntitySetService<Photo> {
  constructor(client: ODataClient) {
    super(client, 'Photos', 'Microsoft.OData.SampleService.Models.TripPin.Photo');
  }
  photoModel(entity?: Partial<Photo>) {
    return this.model<PhotoModel<Photo>>(entity);
  }
  photoCollection(entities?: Partial<Photo>[]) {
    return this.collection<PhotoModel<Photo>, PhotoCollection<Photo, PhotoModel<Photo>>>(entities);
  }
// #region Custom
// #endregion Custom
}
