import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
import { ResourceSpecificPermissionGrant } from './resourcespecificpermissiongrant.entity';
import { ResourceSpecificPermissionGrantCollection } from './resourcespecificpermissiongrant.collection';
//#endregion

export class ResourceSpecificPermissionGrantModel<E extends ResourceSpecificPermissionGrant> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  clientAppId?: string;
  clientId?: string;
  permission?: string;
  permissionType?: string;
  resourceAppId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}