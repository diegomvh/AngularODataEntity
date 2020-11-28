import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PersonOrGroupColumn } from './personorgroupcolumn.complex';
import { PersonOrGroupColumnCollection } from './personorgroupcolumn.collection';
//#endregion

export class PersonOrGroupColumnModel<E extends PersonOrGroupColumn> extends ODataModel<E> {
  //#region ODataApi Properties
  allowMultipleSelection?: boolean;
  chooseFromType?: string;
  displayAs?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}