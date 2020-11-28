import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SharepointIds } from './sharepointids.complex';
import { ItemReference } from './itemreference.complex';
import { SharepointIdsModel } from './sharepointids.model';
import { ItemReferenceModel } from './itemreference.model';
import { SharepointIdsCollection } from './sharepointids.collection';
//#endregion

export class ItemReferenceCollection<E extends ItemReference, M extends ItemReferenceModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}