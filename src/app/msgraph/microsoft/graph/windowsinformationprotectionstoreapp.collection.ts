import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsInformationProtectionAppCollection } from './windowsinformationprotectionapp.collection';
import { WindowsInformationProtectionStoreApp } from './windowsinformationprotectionstoreapp.complex';
import { WindowsInformationProtectionStoreAppModel } from './windowsinformationprotectionstoreapp.model';
//#endregion

export class WindowsInformationProtectionStoreAppCollection<E extends WindowsInformationProtectionStoreApp, M extends WindowsInformationProtectionStoreAppModel<E>> extends WindowsInformationProtectionAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}