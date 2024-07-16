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
import { AirportLocation } from './airport-location.complex';
import { Airport } from './airport.entity';
import { AirportLocationModel } from './airport-location.model';
import { AirportModel } from './airport.model';
import { AirportLocationCollection } from './airport-location.collection';
//#endregion

export class AirportCollection<E extends Airport, M extends AirportModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}