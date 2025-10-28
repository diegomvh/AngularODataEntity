import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions,
  Duration,
} from 'angular-odata';

import { Event } from './event.entity';
import { PlanItem } from './plan-item.entity';
import { PlanItemModel } from './plan-item.model';
import { EventLocation } from './event-location.complex';
import { EventLocationModel } from './event-location.model';

@Model()
export class EventModel<E extends Event> extends PlanItemModel<E> {
  @ModelField()
  Description!: string;
  public $$Description() {
    return this.property<string>('Description');
  }
  public $Description() {
    return this.getAttribute<string>('Description') as string;
  }
  
  public Description$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Description', options) as Observable<string>;
  }

  @ModelField()
  OccursAt!: EventLocationModel<EventLocation>;
  public $$OccursAt() {
    return this.property<EventLocationModel<EventLocation>>('OccursAt');
  }
  public $OccursAt() {
    return this.getAttribute<EventLocationModel<EventLocation>>('OccursAt') as EventLocationModel<EventLocation>;
  }
  
  public OccursAt$(options?: ODataQueryArgumentsOptions<EventLocationModel<EventLocation>>) {
    return this.fetchAttribute<EventLocationModel<EventLocation>>('OccursAt', options) as Observable<EventLocationModel<EventLocation>>;
  }

  
  
  
}