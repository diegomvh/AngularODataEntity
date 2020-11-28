import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { RoleAssignment } from './roleassignment.entity';
import { RoleDefinition } from './roledefinition.entity';
import { RoleAssignmentModel } from './roleassignment.model';
import { RoleDefinitionModel } from './roledefinition.model';
import { RoleDefinitionCollection } from './roledefinition.collection';
//#endregion

export class RoleAssignmentCollection<E extends RoleAssignment, M extends RoleAssignmentModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}