import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RequiredResourceAccess } from './requiredresourceaccess.complex';
import { ResourceAccess } from './resourceaccess.complex';
import { ResourceAccessModel } from './resourceaccess.model';
import { RequiredResourceAccessCollection } from './requiredresourceaccess.collection';
import { ResourceAccessCollection } from './resourceaccess.collection';
//#endregion

export class RequiredResourceAccessModel<E extends RequiredResourceAccess> extends ODataModel<E> {
  //#region ODataApi Properties
  resourceAccess: ResourceAccessCollection<ResourceAccess, ResourceAccessModel<ResourceAccess>>;
  resourceAppId: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}