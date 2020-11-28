import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { InstanceResourceAccess } from './instanceresourceaccess.complex';
import { ResourcePermission } from './resourcepermission.complex';
import { ResourcePermissionModel } from './resourcepermission.model';
import { InstanceResourceAccessCollection } from './instanceresourceaccess.collection';
import { ResourcePermissionCollection } from './resourcepermission.collection';
//#endregion

export class InstanceResourceAccessModel<E extends InstanceResourceAccess> extends ODataModel<E> {
  //#region ODataApi Properties
  permissions: ResourcePermissionCollection<ResourcePermission, ResourcePermissionModel<ResourcePermission>>;
  resourceAppId: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}