import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SharepointIds } from './sharepointids.entity';
import { SharepointIdsModel } from './sharepointids.model';
//#endregion

export class SharepointIdsCollection<E extends SharepointIds, M extends SharepointIdsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}