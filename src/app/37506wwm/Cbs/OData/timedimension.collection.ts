import { ODataModel, ODataCollection, HttpOptions, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
import { TimeDimension } from './timedimension.entity';
import { TimeDimensionModel } from './timedimension.model';
//#endregion

export class TimeDimensionCollection<E extends TimeDimension, M extends TimeDimensionModel<E>> extends DimensionOrTopicCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}