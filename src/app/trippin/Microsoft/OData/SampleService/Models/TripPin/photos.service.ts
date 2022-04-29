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
import { Photo } from './photo.entity';
import { PhotoModel } from './photo.model';
import { PhotoCollection } from './photo.collection';
//#endregion

@Injectable()
export class PhotosService extends ODataEntitySetService<Photo> {
  constructor(client: ODataClient) {
    super(client, 'Photos', 'Microsoft.OData.SampleService.Models.TripPin.Photo');
  }
  //#region ODataApiGen Model
  photoModel(attrs?: Partial<Photo>): PhotoModel<Photo> {
    return this.entity().asModel<PhotoModel<Photo>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  photoCollection(models?: Partial<Photo>[]): PhotoCollection<Photo, PhotoModel<Photo>> {
    return this.entities().asCollection<PhotoModel<Photo>, PhotoCollection<Photo, PhotoModel<Photo>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
