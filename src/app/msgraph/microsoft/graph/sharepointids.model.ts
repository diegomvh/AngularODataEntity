import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SharepointIds } from './sharepointids.entity';
import { SharepointIdsCollection } from './sharepointids.collection';
//#endregion

export class SharepointIdsModel<E extends SharepointIds> extends ODataModel<E> {
  //#region ODataApi Properties
  listId?: string;
  listItemId?: string;
  listItemUniqueId?: string;
  siteId?: string;
  siteUrl?: string;
  tenantId?: string;
  webId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}