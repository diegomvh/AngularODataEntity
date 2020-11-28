import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PolicyBaseCollection } from './policybase.collection';
import { IdentitySecurityDefaultsEnforcementPolicy } from './identitysecuritydefaultsenforcementpolicy.entity';
import { IdentitySecurityDefaultsEnforcementPolicyModel } from './identitysecuritydefaultsenforcementpolicy.model';
//#endregion

export class IdentitySecurityDefaultsEnforcementPolicyCollection<E extends IdentitySecurityDefaultsEnforcementPolicy, M extends IdentitySecurityDefaultsEnforcementPolicyModel<E>> extends PolicyBaseCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}