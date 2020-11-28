import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppPolicyModel } from './managedapppolicy.model';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
//#endregion

export class ManagedAppPolicyCollection<E extends ManagedAppPolicy, M extends ManagedAppPolicyModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}