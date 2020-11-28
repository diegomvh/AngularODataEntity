import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Identity } from './identity.complex';
import { ScopedRoleMembership } from './scopedrolemembership.entity';
import { IdentityModel } from './identity.model';
import { ScopedRoleMembershipModel } from './scopedrolemembership.model';
import { IdentityCollection } from './identity.collection';
import { ScopedRoleMembershipCollection } from './scopedrolemembership.collection';
//#endregion

@Injectable()
export class ScopedRoleMembershipsService extends ODataEntityService<ScopedRoleMembership> {
  constructor(protected client: ODataClient) {
    super(client, 'scopedRoleMemberships', 'microsoft.graph.scopedRoleMembership');
  }

  //#region ODataApi Model
  scopedRoleMembershipModel(): ScopedRoleMembershipModel<ScopedRoleMembership> {
    return this.entity().asModel() as ScopedRoleMembershipModel<ScopedRoleMembership>;
  }
  //#endregion
  //#region ODataApi Collection
  scopedRoleMembershipCollection(): ScopedRoleMembershipCollection<ScopedRoleMembership, ScopedRoleMembershipModel<ScopedRoleMembership>> {
    return this.entities().asCollection() as ScopedRoleMembershipCollection<ScopedRoleMembership, ScopedRoleMembershipModel<ScopedRoleMembership>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
