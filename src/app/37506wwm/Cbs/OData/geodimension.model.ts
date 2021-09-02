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
import { GeoDimension } from './geodimension.entity';
import { GeoDimensionCollection } from './geodimension.collection';
//#endregion

@Model()
export class GeoDimensionModel<E extends GeoDimension> extends DimensionOrTopicModel<E> {
  //#region ODataApi Properties
  @ModelField()
  MapYear?: number;
  public $MapYear() {
    return this.property<number>('MapYear');
  }
  public getMapYear(options?: HttpOptions) {
    return this.getValue<number>('MapYear', options) as Observable<number>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}