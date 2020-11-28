import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { RolePermission } from './rolepermission.entity';
import { RoleAssignment } from './roleassignment.entity';
import { RoleDefinition } from './roledefinition.entity';
import { RolePermissionModel } from './rolepermission.model';
import { RoleAssignmentModel } from './roleassignment.model';
import { RolePermissionCollection } from './rolepermission.collection';
import { RoleAssignmentCollection } from './roleassignment.collection';
import { RoleDefinitionCollection } from './roledefinition.collection';
//#endregion

export class RoleDefinitionModel<E extends RoleDefinition> extends EntityModel<E> {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  isBuiltIn: boolean;
  rolePermissions?: RolePermissionCollection<RolePermission, RolePermissionModel<RolePermission>>;
  roleAssignments?: RoleAssignmentCollection<RoleAssignment, RoleAssignmentModel<RoleAssignment>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}