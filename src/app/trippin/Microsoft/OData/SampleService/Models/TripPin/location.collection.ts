import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { City } from './city.entity';
import { Location } from './location.entity';
import { CityModel } from './city.model';
import { LocationModel } from './location.model';
import { CityCollection } from './city.collection';
//#endregion

export class LocationCollection<E extends Location, M extends LocationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}