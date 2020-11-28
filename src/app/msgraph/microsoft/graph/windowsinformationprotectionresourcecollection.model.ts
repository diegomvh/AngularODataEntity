import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsInformationProtectionResourceCollection } from './windowsinformationprotectionresourcecollection.entity';
import { WindowsInformationProtectionResourceCollectionCollection } from './windowsinformationprotectionresourcecollection.collection';
//#endregion

export class WindowsInformationProtectionResourceCollectionModel<E extends WindowsInformationProtectionResourceCollection> extends ODataModel<E> {
  //#region ODataApi Properties
  displayName: string;
  resources?: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}