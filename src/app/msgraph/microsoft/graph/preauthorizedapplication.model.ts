import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PreAuthorizedApplication } from './preauthorizedapplication.entity';
import { PreAuthorizedApplicationCollection } from './preauthorizedapplication.collection';
//#endregion

export class PreAuthorizedApplicationModel<E extends PreAuthorizedApplication> extends ODataModel<E> {
  //#region ODataApi Properties
  appId?: string;
  delegatedPermissionIds: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}