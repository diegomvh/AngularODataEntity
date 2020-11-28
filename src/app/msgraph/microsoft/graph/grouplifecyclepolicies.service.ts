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
import { GroupLifecyclePolicy } from './grouplifecyclepolicy.entity';
import { GroupLifecyclePolicyModel } from './grouplifecyclepolicy.model';
import { GroupLifecyclePolicyCollection } from './grouplifecyclepolicy.collection';
//#endregion

@Injectable()
export class GroupLifecyclePoliciesService extends ODataEntityService<GroupLifecyclePolicy> {
  constructor(protected client: ODataClient) {
    super(client, 'groupLifecyclePolicies', 'microsoft.graph.groupLifecyclePolicy');
  }

  //#region ODataApi Model
  groupLifecyclePolicyModel(): GroupLifecyclePolicyModel<GroupLifecyclePolicy> {
    return this.entity().asModel() as GroupLifecyclePolicyModel<GroupLifecyclePolicy>;
  }
  //#endregion
  //#region ODataApi Collection
  groupLifecyclePolicyCollection(): GroupLifecyclePolicyCollection<GroupLifecyclePolicy, GroupLifecyclePolicyModel<GroupLifecyclePolicy>> {
    return this.entities().asCollection() as GroupLifecyclePolicyCollection<GroupLifecyclePolicy, GroupLifecyclePolicyModel<GroupLifecyclePolicy>>;
  }
  //#endregion
  //#region ODataApi Actions
  public addGroup(entity: EntityKey<GroupLifecyclePolicy>): ODataActionResource<{groupId: string}, boolean> {
    const resource = this.entity(entity).action<{groupId: string}, boolean>('microsoft.graph.addGroup');
    return resource;
  }
  public removeGroup(entity: EntityKey<GroupLifecyclePolicy>): ODataActionResource<{groupId: string}, boolean> {
    const resource = this.entity(entity).action<{groupId: string}, boolean>('microsoft.graph.removeGroup');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
