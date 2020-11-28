import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppReturnCodeType } from './win32lobappreturncodetype.enum';
import { Win32LobAppReturnCode } from './win32lobappreturncode.complex';
import { Win32LobAppReturnCodeModel } from './win32lobappreturncode.model';
//#endregion

export class Win32LobAppReturnCodeCollection<E extends Win32LobAppReturnCode, M extends Win32LobAppReturnCodeModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}