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
import { TopicGroup } from './topicgroup.entity';
import { TopicGroupCollection } from './topicgroup.collection';
//#endregion

@Model()
export class TopicGroupModel<E extends TopicGroup> extends DimensionOrTopicModel<E> {
  //#region ODataApiGen Properties
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}