import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntitySet, ODataProperty, ODataEntityRequest, ODataCollection } from 'angular-odata';



@Injectable()
export class PhotosService extends ODataEntityService<Photo> {
  static set: string = 'Photos';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.Photo';
  
  // Actions
  
  // Functions
  
  // Navigations
  
}
