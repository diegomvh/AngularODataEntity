import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { GroupLifecyclePolicy } from './grouplifecyclepolicy.entity';
import { GroupLifecyclePolicyCollection } from './grouplifecyclepolicy.collection';
//#endregion

export class GroupLifecyclePolicyModel<E extends GroupLifecyclePolicy> extends EntityModel<E> {
  //#region ODataApi Properties
  alternateNotificationEmails?: string;
  groupLifetimeInDays?: number;
  managedGroupTypes?: string;
  //#endregion
  //#region ODataApi Actions
  public addGroup(groupId: string, options?: HttpOptions): Observable<boolean> {
    var res = this._action<{groupId: string}, boolean>('microsoft.graph.addGroup');
    res.segment.entitySet('groupLifecyclePolicies');
    return res.call({groupId}, 'property', options) as Observable<boolean>;
  }
  public removeGroup(groupId: string, options?: HttpOptions): Observable<boolean> {
    var res = this._action<{groupId: string}, boolean>('microsoft.graph.removeGroup');
    res.segment.entitySet('groupLifecyclePolicies');
    return res.call({groupId}, 'property', options) as Observable<boolean>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}