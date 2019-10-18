import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityRequest, EntityCollection } from 'angular-odata';

import { Photo, PhotoSchema } from './photo.entity';


@Injectable()
export class PhotosService extends ODataEntityService<Photo> {
  static set: string = 'Photos';
  static entity: string = 'Microsoft.OData.SampleService.Models.TripPin.Photo';
  
  // Actions
  
  // Functions
  
  // Navigations
  
}
