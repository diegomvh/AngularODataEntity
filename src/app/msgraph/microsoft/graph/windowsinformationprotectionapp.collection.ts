import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsInformationProtectionApp } from './windowsinformationprotectionapp.entity';
import { WindowsInformationProtectionAppModel } from './windowsinformationprotectionapp.model';
//#endregion

export class WindowsInformationProtectionAppCollection<E extends WindowsInformationProtectionApp, M extends WindowsInformationProtectionAppModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}