import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SharepointIds } from './sharepointids.complex';
import { ItemReference } from './itemreference.complex';
import { SharepointIdsModel } from './sharepointids.model';
import { SharepointIdsCollection } from './sharepointids.collection';
import { ItemReferenceCollection } from './itemreference.collection';
//#endregion

export class ItemReferenceModel<E extends ItemReference> extends ODataModel<E> {
  //#region ODataApi Properties
  driveId?: string;
  driveType?: string;
  id?: string;
  name?: string;
  path?: string;
  shareId?: string;
  sharepointIds?: SharepointIdsModel<SharepointIds>;
  siteId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}