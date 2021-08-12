import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { TimeDimension } from './timedimension.entity';
import { TimeDimensionCollection } from './timedimension.collection';
//#endregion

@Model()
export class TimeDimensionModel<E extends TimeDimension> extends DimensionOrTopicModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ReleasePolicy?: boolean;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}