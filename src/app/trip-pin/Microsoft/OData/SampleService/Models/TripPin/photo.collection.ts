import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';
import { Photo } from './photo.entity';
import { PhotoModel } from './photo.model';

export class PhotoCollection<E extends Photo, M extends PhotoModel<E>> extends ODataCollection<E, M> {
  
}
