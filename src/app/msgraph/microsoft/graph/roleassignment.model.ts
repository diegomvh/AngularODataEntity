import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { RoleAssignment } from './roleassignment.entity';
import { RoleDefinition } from './roledefinition.entity';
import { RoleDefinitionModel } from './roledefinition.model';
import { RoleAssignmentCollection } from './roleassignment.collection';
import { RoleDefinitionCollection } from './roledefinition.collection';
//#endregion

export class RoleAssignmentModel<E extends RoleAssignment> extends EntityModel<E> {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  resourceScopes?: string[];
  roleDefinition?: RoleDefinitionModel<RoleDefinition>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}