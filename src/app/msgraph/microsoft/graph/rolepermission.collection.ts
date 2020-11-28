import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResourceAction } from './resourceaction.entity';
import { RolePermission } from './rolepermission.entity';
import { ResourceActionModel } from './resourceaction.model';
import { RolePermissionModel } from './rolepermission.model';
import { ResourceActionCollection } from './resourceaction.collection';
//#endregion

export class RolePermissionCollection<E extends RolePermission, M extends RolePermissionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}