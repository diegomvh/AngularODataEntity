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
import { TimeDimension } from './timedimension.entity';
import { TimeDimensionCollection } from './timedimension.collection';
//#endregion

@Model()
export class TimeDimensionModel<E extends TimeDimension> extends DimensionOrTopicModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  ReleasePolicy?: boolean;
  public $ReleasePolicy() {
    return this.property<boolean>('ReleasePolicy');
  }
  public getReleasePolicy(options?: ODataOptions) {
    return this.getValue<boolean>('ReleasePolicy', options) as Observable<boolean>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}