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
import { ErratumItem } from './erratumitem.complex';
import { ErratumItemCollection } from './erratumitem.collection';
//#endregion

@Model()
export class ErratumItemModel<E extends ErratumItem> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  PresentationTime!: Date;
  public $PresentationTime() {
    return this.property<Date>('PresentationTime');
  }
  public getPresentationTime(options?: HttpOptions) {
    return this.getValue<Date>('PresentationTime', options) as Observable<Date>;
  }
  
  @ModelField()
  Body?: string;
  public $Body() {
    return this.property<string>('Body');
  }
  public getBody(options?: HttpOptions) {
    return this.getValue<string>('Body', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}