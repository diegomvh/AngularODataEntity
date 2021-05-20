import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DimensionOrTopic } from './dimensionortopic.entity';
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
//#endregion

@Model()
export class DimensionOrTopicModel<E extends DimensionOrTopic> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ID!: number;
  
  
  @ModelField()
  Position?: number;
  
  
  @ModelField()
  ParentID?: number;
  
  
  @ModelField()
  Type?: string;
  
  
  @ModelField()
  Key?: string;
  
  
  @ModelField()
  Title?: string;
  
  
  @ModelField()
  Description?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}