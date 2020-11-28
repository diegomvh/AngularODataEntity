import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsInformationProtectionAppCollection } from './windowsinformationprotectionapp.collection';
import { WindowsInformationProtectionDesktopApp } from './windowsinformationprotectiondesktopapp.complex';
import { WindowsInformationProtectionDesktopAppModel } from './windowsinformationprotectiondesktopapp.model';
//#endregion

export class WindowsInformationProtectionDesktopAppCollection<E extends WindowsInformationProtectionDesktopApp, M extends WindowsInformationProtectionDesktopAppModel<E>> extends WindowsInformationProtectionAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}