import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { Topic } from './topic.entity';
import { TopicCollection } from './topic.collection';
//#endregion

@Model()
export class TopicModel<E extends Topic> extends DimensionOrTopicModel<E> {
  //#region ODataApi Properties
  @ModelField()
  Datatype?: string;
  
  
  @ModelField()
  Unit?: string;
  
  
  @ModelField()
  Decimals?: number;
  
  
  @ModelField()
  Default?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}