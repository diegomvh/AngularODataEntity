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
import { Topic } from './topic.entity';
import { TopicModel } from './topic.model';
//#endregion

export class TopicCollection<E extends Topic, M extends TopicModel<E>> extends DimensionOrTopicCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}