import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ErratumItem } from './erratumitem.complex';
import { ErratumItemCollection } from './erratumitem.collection';
//#endregion

@Model()
export class ErratumItemModel<E extends ErratumItem> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  PresentationTime!: Date;
  public $PresentationTime() {
    return this.property<Date>('PresentationTime');
  }
  public getPresentationTime(options?: ODataOptions) {
    return this.getValue<Date>('PresentationTime', options) as Observable<Date>;
  }
  
  @ModelField()
  Body?: string;
  public $Body() {
    return this.property<string>('Body');
  }
  public getBody(options?: ODataOptions) {
    return this.getValue<string>('Body', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}