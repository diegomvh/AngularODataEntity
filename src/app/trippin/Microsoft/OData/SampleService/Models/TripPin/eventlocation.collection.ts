import { ODataModel, ODataCollection, HttpOptions, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LocationCollection } from './location.collection';
import { EventLocation } from './eventlocation.complex';
import { EventLocationModel } from './eventlocation.model';
//#endregion

export class EventLocationCollection<E extends EventLocation, M extends EventLocationModel<E>> extends LocationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}