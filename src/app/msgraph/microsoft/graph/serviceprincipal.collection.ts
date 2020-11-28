import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { AddIn } from './addin.entity';
import { PermissionScope } from './permissionscope.entity';
import { AppRole } from './approle.entity';
import { InformationalUrl } from './informationalurl.entity';
import { KeyCredential } from './keycredential.entity';
import { PasswordCredential } from './passwordcredential.entity';
import { SamlSingleSignOnSettings } from './samlsinglesignonsettings.entity';
import { DirectoryObject } from './directoryobject.entity';
import { AppRoleAssignment } from './approleassignment.entity';
import { OAuth2PermissionGrant } from './oauth2permissiongrant.entity';
import { HomeRealmDiscoveryPolicy } from './homerealmdiscoverypolicy.entity';
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
import { ClaimsMappingPolicy } from './claimsmappingpolicy.entity';
import { Endpoint } from './endpoint.entity';
import { ServicePrincipal } from './serviceprincipal.entity';
import { AddInModel } from './addin.model';
import { PermissionScopeModel } from './permissionscope.model';
import { AppRoleModel } from './approle.model';
import { InformationalUrlModel } from './informationalurl.model';
import { KeyCredentialModel } from './keycredential.model';
import { PasswordCredentialModel } from './passwordcredential.model';
import { SamlSingleSignOnSettingsModel } from './samlsinglesignonsettings.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { AppRoleAssignmentModel } from './approleassignment.model';
import { OAuth2PermissionGrantModel } from './oauth2permissiongrant.model';
import { HomeRealmDiscoveryPolicyModel } from './homerealmdiscoverypolicy.model';
import { TokenIssuancePolicyModel } from './tokenissuancepolicy.model';
import { TokenLifetimePolicyModel } from './tokenlifetimepolicy.model';
import { ClaimsMappingPolicyModel } from './claimsmappingpolicy.model';
import { EndpointModel } from './endpoint.model';
import { ServicePrincipalModel } from './serviceprincipal.model';
import { AddInCollection } from './addin.collection';
import { PermissionScopeCollection } from './permissionscope.collection';
import { AppRoleCollection } from './approle.collection';
import { InformationalUrlCollection } from './informationalurl.collection';
import { KeyCredentialCollection } from './keycredential.collection';
import { PasswordCredentialCollection } from './passwordcredential.collection';
import { SamlSingleSignOnSettingsCollection } from './samlsinglesignonsettings.collection';
import { AppRoleAssignmentCollection } from './approleassignment.collection';
import { OAuth2PermissionGrantCollection } from './oauth2permissiongrant.collection';
import { HomeRealmDiscoveryPolicyCollection } from './homerealmdiscoverypolicy.collection';
import { TokenIssuancePolicyCollection } from './tokenissuancepolicy.collection';
import { TokenLifetimePolicyCollection } from './tokenlifetimepolicy.collection';
import { ClaimsMappingPolicyCollection } from './claimsmappingpolicy.collection';
import { EndpointCollection } from './endpoint.collection';
//#endregion

export class ServicePrincipalCollection<E extends ServicePrincipal, M extends ServicePrincipalModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public delta(options?: HttpOptions): Observable<ServicePrincipalCollection<ServicePrincipal, ServicePrincipalModel<ServicePrincipal>>> {
    var res = this._function<null, ServicePrincipal>('microsoft.graph.delta');
    res.segment.entitySet('servicePrincipals');
    return res.call(null, 'collection', options) as Observable<ServicePrincipalCollection<ServicePrincipal, ServicePrincipalModel<ServicePrincipal>>>;
  }
  //#endregion
}