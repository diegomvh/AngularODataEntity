import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChoiceColumn } from './choicecolumn.complex';
import { ChoiceColumnCollection } from './choicecolumn.collection';
//#endregion

export class ChoiceColumnModel<E extends ChoiceColumn> extends ODataModel<E> {
  //#region ODataApi Properties
  allowTextEntry?: boolean;
  choices?: string[];
  displayAs?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}