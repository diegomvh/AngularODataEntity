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
import { Event } from './event.entity';
import { EventModel } from './event.model';
import { PlanItem } from './plan-item.entity';
import { PlanItemCollection } from './plan-item.collection';
import { PlanItemModel } from './plan-item.model';
import { EventLocation } from './event-location.complex';
import { EventLocationModel } from './event-location.model';

export class EventCollection<E extends Event, M extends EventModel<E>> extends PlanItemCollection<E, M> {
  
}
