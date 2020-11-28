import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { ManagedAppPolicyCollection } from './managedapppolicy.collection';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
//#endregion

export class ManagedAppPolicyModel<E extends ManagedAppPolicy> extends EntityModel<E> {
  //#region ODataApi Properties
  createdDateTime: Date;
  description?: string;
  displayName: string;
  lastModifiedDateTime: Date;
  version?: string;
  //#endregion
  //#region ODataApi Actions
  public targetApps(apps: ManagedMobileApp[], options?: HttpOptions): Observable<any> {
    var res = this._action<{apps: ManagedMobileApp[]}, any>('microsoft.graph.targetApps');
    res.segment.entitySet('');
    return res.call({apps}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}