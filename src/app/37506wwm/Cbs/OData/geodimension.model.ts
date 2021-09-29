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
import { GeoDimension } from './geodimension.entity';
import { GeoDimensionCollection } from './geodimension.collection';
//#endregion

@Model()
export class GeoDimensionModel<E extends GeoDimension> extends DimensionOrTopicModel<E> {
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