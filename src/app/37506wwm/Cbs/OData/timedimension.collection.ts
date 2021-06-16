import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

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