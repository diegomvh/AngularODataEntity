import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { NumberColumn } from './numbercolumn.complex';
import { NumberColumnCollection } from './numbercolumn.collection';
//#endregion

export class NumberColumnModel<E extends NumberColumn> extends ODataModel<E> {
  //#region ODataApi Properties
  decimalPlaces?: string;
  displayAs?: string;
  maximum?: number;
  minimum?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}