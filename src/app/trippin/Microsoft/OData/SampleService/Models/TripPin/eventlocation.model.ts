import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LocationModel } from './location.model';
import { EventLocation } from './eventlocation.complex';
import { EventLocationCollection } from './eventlocation.collection';
//#endregion

export class EventLocationModel<E extends EventLocation> extends LocationModel<E> {
  //#region ODataApi Properties
  BuildingInfo?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}