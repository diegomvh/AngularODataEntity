import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppReturnCodeType } from './win32lobappreturncodetype.enum';
import { Win32LobAppReturnCode } from './win32lobappreturncode.complex';
import { Win32LobAppReturnCodeCollection } from './win32lobappreturncode.collection';
//#endregion

export class Win32LobAppReturnCodeModel<E extends Win32LobAppReturnCode> extends ODataModel<E> {
  //#region ODataApi Properties
  returnCode: number;
  type: Win32LobAppReturnCodeType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}