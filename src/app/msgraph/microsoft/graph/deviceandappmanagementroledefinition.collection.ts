import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RoleDefinitionCollection } from './roledefinition.collection';
import { DeviceAndAppManagementRoleDefinition } from './deviceandappmanagementroledefinition.entity';
import { DeviceAndAppManagementRoleDefinitionModel } from './deviceandappmanagementroledefinition.model';
//#endregion

export class DeviceAndAppManagementRoleDefinitionCollection<E extends DeviceAndAppManagementRoleDefinition, M extends DeviceAndAppManagementRoleDefinitionModel<E>> extends RoleDefinitionCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}