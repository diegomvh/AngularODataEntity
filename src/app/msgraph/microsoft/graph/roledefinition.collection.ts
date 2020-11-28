import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { RolePermission } from './rolepermission.complex';
import { RoleAssignment } from './roleassignment.entity';
import { RoleDefinition } from './roledefinition.entity';
import { RolePermissionModel } from './rolepermission.model';
import { RoleAssignmentModel } from './roleassignment.model';
import { RoleDefinitionModel } from './roledefinition.model';
import { RolePermissionCollection } from './rolepermission.collection';
import { RoleAssignmentCollection } from './roleassignment.collection';
//#endregion

export class RoleDefinitionCollection<E extends RoleDefinition, M extends RoleDefinitionModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}