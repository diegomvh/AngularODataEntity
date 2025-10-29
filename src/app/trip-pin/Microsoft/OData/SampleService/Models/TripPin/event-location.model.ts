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

import { EventLocation } from './event-location.complex';
import { Location } from './location.complex';
import { LocationModel } from './location.model';

@Model()
export class EventLocationModel<E extends EventLocation> extends LocationModel<E> {
  @ModelField()
  declare BuildingInfo: string;
  public $$BuildingInfo() {
    return this.property<string>('BuildingInfo');
  }
  public $BuildingInfo() {
    return this.getAttribute<string>('BuildingInfo') as string;
  }
  
  public BuildingInfo$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('BuildingInfo', options) as Observable<string>;
  }

  
  
  
}