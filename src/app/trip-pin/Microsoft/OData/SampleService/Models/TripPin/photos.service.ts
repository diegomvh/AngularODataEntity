import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { Photo } from './photo.entity';

@Injectable()
export class PhotosService extends ODataEntitySetService<Photo> {
  constructor(client: ODataClient) {
    super(client, 'Photos', 'Microsoft.OData.SampleService.Models.TripPin.Photo');
  }
  photoModel(entity?: Partial<Photo>) {
    return this.model(entity);
  }
  photoCollection(entities?: Partial<Photo>[]) {
    return this.collection(entities);
  }
}
