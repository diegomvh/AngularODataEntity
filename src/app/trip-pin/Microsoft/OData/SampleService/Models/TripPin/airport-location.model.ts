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
import { Point, } from 'geojson';
import { AirportLocation } from './airport-location.complex';
import { Location } from './location.complex';
import { LocationModel } from './location.model';

@Model()
export class AirportLocationModel<E extends AirportLocation> extends LocationModel<E> {
  @ModelField()
  Loc!: Point;
  public $$Loc() {
    return this.property<Point>('Loc');
  }
  public $Loc() {
    return this.getAttribute<Point>('Loc') as Point;
  }
  
  public Loc$(options?: ODataQueryArgumentsOptions<Point>) {
    return this.fetchAttribute<Point>('Loc', options) as Observable<Point>;
  }

  
  
  
}