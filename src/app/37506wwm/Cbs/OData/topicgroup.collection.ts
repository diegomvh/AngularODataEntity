import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
import { TopicGroup } from './topicgroup.entity';
import { TopicGroupModel } from './topicgroup.model';
//#endregion

export class TopicGroupCollection<E extends TopicGroup, M extends TopicGroupModel<E>> extends DimensionOrTopicCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}