import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { InstanceResourceAccess } from './instanceresourceaccess.complex';
import { ResourcePermission } from './resourcepermission.complex';
import { InstanceResourceAccessModel } from './instanceresourceaccess.model';
import { ResourcePermissionModel } from './resourcepermission.model';
import { ResourcePermissionCollection } from './resourcepermission.collection';
//#endregion

export class InstanceResourceAccessCollection<E extends InstanceResourceAccess, M extends InstanceResourceAccessModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}