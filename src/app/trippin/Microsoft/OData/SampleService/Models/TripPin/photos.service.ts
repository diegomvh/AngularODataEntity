import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityRequest, ODataEntitySet } from 'angular-odata';

import { Photo } from './photo.interface';


@Injectable()
export class PhotosService extends ODataEntityService<Photo> {
  static set: string = 'Photos';
  
  protected resolveEntityKey(entity: Partial<Photo>) {
    return entity.Id;
  }
  // Actions
  
  // Functions
  
  // Navigations
  
}
