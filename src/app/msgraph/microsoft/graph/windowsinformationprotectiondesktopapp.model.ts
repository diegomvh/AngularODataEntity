import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsInformationProtectionAppModel } from './windowsinformationprotectionapp.model';
import { WindowsInformationProtectionDesktopApp } from './windowsinformationprotectiondesktopapp.entity';
import { WindowsInformationProtectionDesktopAppCollection } from './windowsinformationprotectiondesktopapp.collection';
//#endregion

export class WindowsInformationProtectionDesktopAppModel<E extends WindowsInformationProtectionDesktopApp> extends WindowsInformationProtectionAppModel<E> {
  //#region ODataApi Properties
  binaryName: string;
  binaryVersionHigh?: string;
  binaryVersionLow?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}