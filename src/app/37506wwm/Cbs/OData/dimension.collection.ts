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
import { Dimension } from './dimension.entity';
import { DimensionModel } from './dimension.model';
//#endregion

export class DimensionCollection<E extends Dimension, M extends DimensionModel<E>> extends DimensionOrTopicCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}