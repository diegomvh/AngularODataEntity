import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { TopicGroup } from './topicgroup.entity';
import { TopicGroupCollection } from './topicgroup.collection';
//#endregion

export class TopicGroupModel<E extends TopicGroup> extends DimensionOrTopicModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}