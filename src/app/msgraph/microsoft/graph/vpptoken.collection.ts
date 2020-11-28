import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { VppTokenAccountType } from './vpptokenaccounttype.enum';
import { VppTokenState } from './vpptokenstate.enum';
import { VppTokenSyncStatus } from './vpptokensyncstatus.enum';
import { VppToken } from './vpptoken.entity';
import { VppTokenModel } from './vpptoken.model';
//#endregion

export class VppTokenCollection<E extends VppToken, M extends VppTokenModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}