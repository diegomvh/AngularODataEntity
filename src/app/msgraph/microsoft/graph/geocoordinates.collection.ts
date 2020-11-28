import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GeoCoordinates } from './geocoordinates.entity';
import { GeoCoordinatesModel } from './geocoordinates.model';
//#endregion

export class GeoCoordinatesCollection<E extends GeoCoordinates, M extends GeoCoordinatesModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}