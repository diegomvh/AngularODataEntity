import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { VppTokenAccountType } from './vpptokenaccounttype.enum';
import { VppTokenState } from './vpptokenstate.enum';
import { VppTokenSyncStatus } from './vpptokensyncstatus.enum';
import { VppToken } from './vpptoken.entity';
import { VppTokenCollection } from './vpptoken.collection';
//#endregion

export class VppTokenModel<E extends VppToken> extends EntityModel<E> {
  //#region ODataApi Properties
  appleId?: string;
  automaticallyUpdateApps: boolean;
  countryOrRegion?: string;
  expirationDateTime: Date;
  lastModifiedDateTime: Date;
  lastSyncDateTime: Date;
  lastSyncStatus: VppTokenSyncStatus;
  organizationName?: string;
  state: VppTokenState;
  token?: string;
  vppTokenAccountType: VppTokenAccountType;
  //#endregion
  //#region ODataApi Actions
  public syncLicenses(options?: HttpOptions): Observable<VppTokenModel<VppToken>> {
    var res = this._action<null, VppToken>('microsoft.graph.syncLicenses');
    res.segment.entitySet('');
    return res.call(null, 'model', options) as Observable<VppTokenModel<VppToken>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}