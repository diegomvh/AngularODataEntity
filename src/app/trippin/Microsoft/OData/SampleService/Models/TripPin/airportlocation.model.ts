import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Point } from 'geojson';
import { LocationModel } from './location.model';
import { AirportLocation } from './airportlocation.complex';
import { AirportLocationCollection } from './airportlocation.collection';
//#endregion

@Model()
export class AirportLocationModel<E extends AirportLocation> extends LocationModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  Loc!: Point;
  public $Loc() {
    return this.property<Point>('Loc');
  }
  public getLoc(options?: ODataOptions) {
    return this.getValue<Point>('Loc', options) as Observable<Point>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}