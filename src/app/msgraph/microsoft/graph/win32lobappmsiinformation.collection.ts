import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppMsiPackageType } from './win32lobappmsipackagetype.enum';
import { Win32LobAppMsiInformation } from './win32lobappmsiinformation.complex';
import { Win32LobAppMsiInformationModel } from './win32lobappmsiinformation.model';
//#endregion

export class Win32LobAppMsiInformationCollection<E extends Win32LobAppMsiInformation, M extends Win32LobAppMsiInformationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}