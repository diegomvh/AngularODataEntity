import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { ResourceSpecificPermissionGrant } from './resourcespecificpermissiongrant.entity';
import { ResourceSpecificPermissionGrantModel } from './resourcespecificpermissiongrant.model';
//#endregion

export class ResourceSpecificPermissionGrantCollection<E extends ResourceSpecificPermissionGrant, M extends ResourceSpecificPermissionGrantModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}