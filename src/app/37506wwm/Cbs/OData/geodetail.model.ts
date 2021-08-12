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
import { GeoDetail } from './geodetail.entity';
import { GeoDetailCollection } from './geodetail.collection';
//#endregion

@Model()
export class GeoDetailModel<E extends GeoDetail> extends DimensionOrTopicModel<E> {
  //#region ODataApi Properties
  @ModelField()
  MapYear?: number;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}