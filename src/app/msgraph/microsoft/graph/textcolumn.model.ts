import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TextColumn } from './textcolumn.entity';
import { TextColumnCollection } from './textcolumn.collection';
//#endregion

export class TextColumnModel<E extends TextColumn> extends ODataModel<E> {
  //#region ODataApi Properties
  allowMultipleLines?: boolean;
  appendChangesToExistingText?: boolean;
  linesForEditing?: number;
  maxLength?: number;
  textType?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}