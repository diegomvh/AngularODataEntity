import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { LinkedResource } from './linkedresource.entity';
import { LinkedResourceCollection } from './linkedresource.collection';
//#endregion

export class LinkedResourceModel<E extends LinkedResource> extends EntityModel<E> {
  //#region ODataApi Properties
  applicationName?: string;
  displayName?: string;
  externalId?: string;
  webUrl?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}