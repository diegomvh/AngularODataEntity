import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PolicyBaseModel } from './policybase.model';
import { IdentitySecurityDefaultsEnforcementPolicy } from './identitysecuritydefaultsenforcementpolicy.entity';
import { IdentitySecurityDefaultsEnforcementPolicyCollection } from './identitysecuritydefaultsenforcementpolicy.collection';
//#endregion

export class IdentitySecurityDefaultsEnforcementPolicyModel<E extends IdentitySecurityDefaultsEnforcementPolicy> extends PolicyBaseModel<E> {
  //#region ODataApi Properties
  isEnabled: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}