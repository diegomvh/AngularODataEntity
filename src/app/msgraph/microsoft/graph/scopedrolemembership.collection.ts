import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Identity } from './identity.complex';
import { ScopedRoleMembership } from './scopedrolemembership.entity';
import { IdentityModel } from './identity.model';
import { ScopedRoleMembershipModel } from './scopedrolemembership.model';
import { IdentityCollection } from './identity.collection';
//#endregion

export class ScopedRoleMembershipCollection<E extends ScopedRoleMembership, M extends ScopedRoleMembershipModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}