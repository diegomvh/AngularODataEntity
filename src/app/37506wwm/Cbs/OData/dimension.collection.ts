import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
import { Dimension } from './dimension.entity';
import { DimensionModel } from './dimension.model';
//#endregion

export class DimensionCollection<E extends Dimension, M extends DimensionModel<E>> extends DimensionOrTopicCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}