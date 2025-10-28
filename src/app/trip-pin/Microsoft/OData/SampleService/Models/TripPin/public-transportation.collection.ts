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
import { PublicTransportation } from './public-transportation.entity';
import { PublicTransportationModel } from './public-transportation.model';
import { PlanItem } from './plan-item.entity';
import { PlanItemCollection } from './plan-item.collection';
import { PlanItemModel } from './plan-item.model';

export class PublicTransportationCollection<E extends PublicTransportation, M extends PublicTransportationModel<E>> extends PlanItemCollection<E, M> {
  
}
