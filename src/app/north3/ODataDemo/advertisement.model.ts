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
import { Advertisement } from './advertisement.entity';
import { AdvertisementCollection } from './advertisement.collection';
//#endregion

@Model()
export class AdvertisementModel<E extends Advertisement> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ID!: string;
  
  
  @ModelField()
  Name?: string;
  
  
  @ModelField()
  AirDate!: any;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}