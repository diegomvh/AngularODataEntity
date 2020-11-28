import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { GeoDetail } from './geodetail.entity';
import { GeoDetailCollection } from './geodetail.collection';
//#endregion

export class GeoDetailModel<E extends GeoDetail> extends DimensionOrTopicModel<E> {
  //#region ODataApi Properties
  MapYear?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}