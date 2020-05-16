import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, ODataValueAnnotations, ODataEntityResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { Photo } from './photo.entity';
//#endregion

@Injectable()
export class PhotosService extends ODataEntityService<Photo> {
  static path: string = 'Photos';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.Photos';
  static entity: string = 'Microsoft.OData.SampleService.Models.TripPin.Photo';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
