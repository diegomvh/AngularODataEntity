import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
import { GeoDetail } from './geodetail.entity';
import { GeoDetailModel } from './geodetail.model';
//#endregion

export class GeoDetailCollection<E extends GeoDetail, M extends GeoDetailModel<E>> extends DimensionOrTopicCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}