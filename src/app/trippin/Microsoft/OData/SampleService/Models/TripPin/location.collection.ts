import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { City } from './city.complex';
import { Location } from './location.complex';
import { CityModel } from './city.model';
import { LocationModel } from './location.model';
import { CityCollection } from './city.collection';
//#endregion

export class LocationCollection<E extends Location, M extends LocationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}