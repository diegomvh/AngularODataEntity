import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SecurityResourceType } from './securityresourcetype.enum';
import { SecurityResource } from './securityresource.entity';
import { SecurityResourceCollection } from './securityresource.collection';
//#endregion

export class SecurityResourceModel<E extends SecurityResource> extends ODataModel<E> {
  //#region ODataApi Properties
  resource?: string;
  resourceType?: SecurityResourceType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}