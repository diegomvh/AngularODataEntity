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
import { AirportLocation } from './airportlocation.complex';
import { AirportLocationModel } from './airportlocation.model';
//#endregion

export class AirportLocationCollection<E extends AirportLocation, M extends AirportLocationModel<E>> extends LocationCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}