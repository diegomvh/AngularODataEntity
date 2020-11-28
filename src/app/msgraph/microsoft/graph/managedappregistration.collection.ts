import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ManagedAppFlaggedReason } from './managedappflaggedreason.enum';
import { MobileAppIdentifier } from './mobileappidentifier.complex';
import { ManagedAppRegistration } from './managedappregistration.entity';
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { ManagedAppOperation } from './managedappoperation.entity';
import { MobileAppIdentifierModel } from './mobileappidentifier.model';
import { ManagedAppRegistrationModel } from './managedappregistration.model';
import { ManagedAppPolicyModel } from './managedapppolicy.model';
import { ManagedAppOperationModel } from './managedappoperation.model';
import { MobileAppIdentifierCollection } from './mobileappidentifier.collection';
import { ManagedAppPolicyCollection } from './managedapppolicy.collection';
import { ManagedAppOperationCollection } from './managedappoperation.collection';
//#endregion

export class ManagedAppRegistrationCollection<E extends ManagedAppRegistration, M extends ManagedAppRegistrationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getUserIdsWithFlaggedAppRegistration(options?: HttpOptions): Observable<string> {
    var res = this._function<null, string>('microsoft.graph.getUserIdsWithFlaggedAppRegistration');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<string>;
  }
  //#endregion
}