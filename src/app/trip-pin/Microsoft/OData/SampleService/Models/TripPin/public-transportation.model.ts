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

import { PublicTransportation } from './public-transportation.entity';
import { PlanItem } from './plan-item.entity';
import { PlanItemModel } from './plan-item.model';

@Model()
export class PublicTransportationModel<E extends PublicTransportation> extends PlanItemModel<E> {
  @ModelField()
  declare SeatNumber: string;
  public $$SeatNumber() {
    return this.property<string>('SeatNumber');
  }
  public $SeatNumber() {
    return this.getAttribute<string>('SeatNumber') as string;
  }
  
  public SeatNumber$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('SeatNumber', options) as Observable<string>;
  }

  
  
  
}