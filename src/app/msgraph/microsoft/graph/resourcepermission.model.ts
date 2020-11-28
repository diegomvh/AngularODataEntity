import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResourcePermission } from './resourcepermission.complex';
import { ResourcePermissionCollection } from './resourcepermission.collection';
//#endregion

export class ResourcePermissionModel<E extends ResourcePermission> extends ODataModel<E> {
  //#region ODataApi Properties
  type: string;
  value: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}