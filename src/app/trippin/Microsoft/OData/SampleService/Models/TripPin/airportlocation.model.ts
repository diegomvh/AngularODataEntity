import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Point } from 'geojson';
import { LocationModel } from './location.model';
import { AirportLocation } from './airportlocation.complex';
import { AirportLocationCollection } from './airportlocation.collection';
//#endregion

@Model()
export class AirportLocationModel<E extends AirportLocation> extends LocationModel<E> {
  //#region ODataApi Properties
  @ModelField()
  Loc!: Point;
  public $Loc() {
    return this.property<Point>('Loc');
  }
  public getLoc(options?: HttpOptions) {
    return this.getValue<Point>('Loc', options) as Observable<Point>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}