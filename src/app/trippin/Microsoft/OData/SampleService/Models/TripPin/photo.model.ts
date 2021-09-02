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
  public $Id() {
    return this.property<number>('Id');
  }
  public getId(options?: HttpOptions) {
    return this.getValue<number>('Id', options) as Observable<number>;
  }
  
  @ModelField()
  Name?: string;
  public $Name() {
    return this.property<string>('Name');
  }
  public getName(options?: HttpOptions) {
    return this.getValue<string>('Name', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}