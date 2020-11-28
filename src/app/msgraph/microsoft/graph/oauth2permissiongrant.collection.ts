import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { OAuth2PermissionGrant } from './oauth2permissiongrant.entity';
import { OAuth2PermissionGrantModel } from './oauth2permissiongrant.model';
//#endregion

export class OAuth2PermissionGrantCollection<E extends OAuth2PermissionGrant, M extends OAuth2PermissionGrantModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public delta(options?: HttpOptions): Observable<OAuth2PermissionGrantCollection<OAuth2PermissionGrant, OAuth2PermissionGrantModel<OAuth2PermissionGrant>>> {
    var res = this._function<null, OAuth2PermissionGrant>('microsoft.graph.delta');
    res.segment.entitySet('oauth2PermissionGrants');
    return res.call(null, 'collection', options) as Observable<OAuth2PermissionGrantCollection<OAuth2PermissionGrant, OAuth2PermissionGrantModel<OAuth2PermissionGrant>>>;
  }
  //#endregion
}