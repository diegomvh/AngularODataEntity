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
import { Dimension } from './dimension.entity';
import { DimensionCollection } from './dimension.collection';
//#endregion

@Model()
export class DimensionModel<E extends Dimension> extends DimensionOrTopicModel<E> {
  //#region ODataApiGen Properties
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}