import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ErratumItem } from './erratumitem.complex';
import { ErratumItemCollection } from './erratumitem.collection';
//#endregion

export class ErratumItemModel<E extends ErratumItem> extends ODataModel<E> {
  //#region ODataApi Properties
  PresentationTime!: Date;
  Body?: string;
  //#endregion
  //#region ODataApi Setters
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}