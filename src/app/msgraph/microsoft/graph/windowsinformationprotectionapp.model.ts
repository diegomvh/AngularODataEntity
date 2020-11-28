import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsInformationProtectionApp } from './windowsinformationprotectionapp.entity';
import { WindowsInformationProtectionAppCollection } from './windowsinformationprotectionapp.collection';
//#endregion

export class WindowsInformationProtectionAppModel<E extends WindowsInformationProtectionApp> extends ODataModel<E> {
  //#region ODataApi Properties
  denied: boolean;
  description?: string;
  displayName: string;
  productName?: string;
  publisherName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}