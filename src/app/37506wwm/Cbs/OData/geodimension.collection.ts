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
import { GeoDimension } from './geodimension.entity';
import { GeoDimensionModel } from './geodimension.model';
//#endregion

export class GeoDimensionCollection<E extends GeoDimension, M extends GeoDimensionModel<E>> extends DimensionOrTopicCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}