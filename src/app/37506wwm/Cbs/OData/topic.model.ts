import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { Topic } from './topic.entity';
import { TopicCollection } from './topic.collection';
//#endregion

export class TopicModel<E extends Topic> extends DimensionOrTopicModel<E> {
  //#region ODataApi Properties
  Datatype?: string;
  Unit?: string;
  Decimals?: number;
  Default?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}