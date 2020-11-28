import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ApiApplication } from './apiapplication.entity';
import { PermissionScope } from './permissionscope.entity';
import { PreAuthorizedApplication } from './preauthorizedapplication.entity';
import { ApiApplicationModel } from './apiapplication.model';
import { PermissionScopeModel } from './permissionscope.model';
import { PreAuthorizedApplicationModel } from './preauthorizedapplication.model';
import { PermissionScopeCollection } from './permissionscope.collection';
import { PreAuthorizedApplicationCollection } from './preauthorizedapplication.collection';
//#endregion

export class ApiApplicationCollection<E extends ApiApplication, M extends ApiApplicationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}