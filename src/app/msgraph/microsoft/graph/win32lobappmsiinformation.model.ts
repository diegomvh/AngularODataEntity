import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppMsiPackageType } from './win32lobappmsipackagetype.enum';
import { Win32LobAppMsiInformation } from './win32lobappmsiinformation.complex';
import { Win32LobAppMsiInformationCollection } from './win32lobappmsiinformation.collection';
//#endregion

export class Win32LobAppMsiInformationModel<E extends Win32LobAppMsiInformation> extends ODataModel<E> {
  //#region ODataApi Properties
  packageType: Win32LobAppMsiPackageType;
  productCode?: string;
  productName?: string;
  productVersion?: string;
  publisher?: string;
  requiresReboot: boolean;
  upgradeCode?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}