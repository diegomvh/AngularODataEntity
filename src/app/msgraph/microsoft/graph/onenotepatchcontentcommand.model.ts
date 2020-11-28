import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenotePatchActionType } from './onenotepatchactiontype.enum';
import { OnenotePatchInsertPosition } from './onenotepatchinsertposition.enum';
import { OnenotePatchContentCommand } from './onenotepatchcontentcommand.complex';
import { OnenotePatchContentCommandCollection } from './onenotepatchcontentcommand.collection';
//#endregion

export class OnenotePatchContentCommandModel<E extends OnenotePatchContentCommand> extends ODataModel<E> {
  //#region ODataApi Properties
  action: OnenotePatchActionType;
  content?: string;
  position?: OnenotePatchInsertPosition;
  target: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}