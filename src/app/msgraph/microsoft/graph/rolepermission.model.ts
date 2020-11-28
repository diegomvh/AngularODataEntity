import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResourceAction } from './resourceaction.complex';
import { RolePermission } from './rolepermission.complex';
import { ResourceActionModel } from './resourceaction.model';
import { ResourceActionCollection } from './resourceaction.collection';
import { RolePermissionCollection } from './rolepermission.collection';
//#endregion

export class RolePermissionModel<E extends RolePermission> extends ODataModel<E> {
  //#region ODataApi Properties
  resourceActions?: ResourceActionCollection<ResourceAction, ResourceActionModel<ResourceAction>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}