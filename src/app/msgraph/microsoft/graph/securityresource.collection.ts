import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SecurityResourceType } from './securityresourcetype.enum';
import { SecurityResource } from './securityresource.complex';
import { SecurityResourceModel } from './securityresource.model';
//#endregion

export class SecurityResourceCollection<E extends SecurityResource, M extends SecurityResourceModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}