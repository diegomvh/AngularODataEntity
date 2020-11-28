import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { TimeDimension } from './timedimension.entity';
import { TimeDimensionCollection } from './timedimension.collection';
//#endregion

export class TimeDimensionModel<E extends TimeDimension> extends DimensionOrTopicModel<E> {
  //#region ODataApi Properties
  ReleasePolicy?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}