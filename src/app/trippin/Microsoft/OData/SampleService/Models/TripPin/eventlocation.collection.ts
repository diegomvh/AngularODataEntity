import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LocationCollection } from './location.collection';
import { EventLocation } from './eventlocation.complex';
import { EventLocationModel } from './eventlocation.model';
//#endregion

export class EventLocationCollection<E extends EventLocation, M extends EventLocationModel<E>> extends LocationCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}