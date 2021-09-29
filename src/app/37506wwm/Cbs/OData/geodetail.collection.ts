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
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
import { GeoDetail } from './geodetail.entity';
import { GeoDetailModel } from './geodetail.model';
//#endregion

export class GeoDetailCollection<E extends GeoDetail, M extends GeoDetailModel<E>> extends DimensionOrTopicCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}