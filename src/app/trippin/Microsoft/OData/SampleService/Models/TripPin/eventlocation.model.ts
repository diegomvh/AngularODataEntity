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
import { LocationModel } from './location.model';
import { EventLocation } from './eventlocation.complex';
import { EventLocationCollection } from './eventlocation.collection';
//#endregion

@Model()
export class EventLocationModel<E extends EventLocation> extends LocationModel<E> {
  //#region ODataApi Properties
  @ModelField()
  BuildingInfo?: string;
  public $BuildingInfo() {
    return this.property<string>('BuildingInfo');
  }
  public getBuildingInfo(options?: HttpOptions) {
    return this.getValue<string>('BuildingInfo', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}