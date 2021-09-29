import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { GeoDetail } from './geodetail.entity';
import { GeoDetailCollection } from './geodetail.collection';
//#endregion

@Model()
export class GeoDetailModel<E extends GeoDetail> extends DimensionOrTopicModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  MapYear?: number;
  public $MapYear() {
    return this.property<number>('MapYear');
  }
  public getMapYear(options?: ODataOptions) {
    return this.getValue<number>('MapYear', options) as Observable<number>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}