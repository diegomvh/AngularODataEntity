import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OutlookGeoCoordinates } from './outlookgeocoordinates.entity';
import { OutlookGeoCoordinatesModel } from './outlookgeocoordinates.model';
//#endregion

export class OutlookGeoCoordinatesCollection<E extends OutlookGeoCoordinates, M extends OutlookGeoCoordinatesModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}