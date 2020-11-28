import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DimensionOrTopic } from './dimensionortopic.entity';
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
//#endregion

export class DimensionOrTopicModel<E extends DimensionOrTopic> extends ODataModel<E> {
  //#region ODataApi Properties
  ID: number;
  Position?: number;
  ParentID?: number;
  Type?: string;
  Key?: string;
  Title?: string;
  Description?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}