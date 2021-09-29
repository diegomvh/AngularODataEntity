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
import { TimeDimension } from './timedimension.entity';
import { TimeDimensionModel } from './timedimension.model';
//#endregion

export class TimeDimensionCollection<E extends TimeDimension, M extends TimeDimensionModel<E>> extends DimensionOrTopicCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}