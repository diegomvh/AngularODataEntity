import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Identity } from './identity.complex';
import { ScopedRoleMembership } from './scopedrolemembership.entity';
import { IdentityModel } from './identity.model';
import { IdentityCollection } from './identity.collection';
import { ScopedRoleMembershipCollection } from './scopedrolemembership.collection';
//#endregion

export class ScopedRoleMembershipModel<E extends ScopedRoleMembership> extends EntityModel<E> {
  //#region ODataApi Properties
  administrativeUnitId: string;
  roleId: string;
  roleMemberInfo: IdentityModel<Identity>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}