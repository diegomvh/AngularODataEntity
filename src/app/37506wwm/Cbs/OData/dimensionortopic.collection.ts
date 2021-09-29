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
import { DimensionOrTopic } from './dimensionortopic.entity';
import { DimensionOrTopicModel } from './dimensionortopic.model';
//#endregion

export class DimensionOrTopicCollection<E extends DimensionOrTopic, M extends DimensionOrTopicModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}