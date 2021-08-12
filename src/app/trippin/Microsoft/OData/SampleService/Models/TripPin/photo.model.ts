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
import { Photo } from './photo.entity';
import { PhotoCollection } from './photo.collection';
//#endregion

@Model()
export class PhotoModel<E extends Photo> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  Id!: number;
  
  
  @ModelField()
  Name?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}