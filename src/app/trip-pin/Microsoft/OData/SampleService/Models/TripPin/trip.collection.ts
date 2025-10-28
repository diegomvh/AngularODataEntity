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
import { Trip } from './trip.entity';
import { TripModel } from './trip.model';
import { Photo } from './photo.entity';
import { PhotoModel } from './photo.model';
import { PhotoCollection } from './photo.collection';
import { PlanItem } from './plan-item.entity';
import { PlanItemModel } from './plan-item.model';
import { PlanItemCollection } from './plan-item.collection';

export class TripCollection<E extends Trip, M extends TripModel<E>> extends ODataCollection<E, M> {
  
}
