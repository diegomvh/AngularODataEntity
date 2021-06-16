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
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PlanItemModel } from './planitem.model';
import { PublicTransportation } from './publictransportation.entity';
import { PublicTransportationCollection } from './publictransportation.collection';
//#endregion

@Model()
export class PublicTransportationModel<E extends PublicTransportation> extends PlanItemModel<E> {
  //#region ODataApi Properties
  @ModelField()
  SeatNumber?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}