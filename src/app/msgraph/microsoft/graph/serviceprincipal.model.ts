import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
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
import { AppRoleAssignmentModel } from './approleassignment.model';
import { OAuth2PermissionGrantModel } from './oauth2permissiongrant.model';
import { HomeRealmDiscoveryPolicyModel } from './homerealmdiscoverypolicy.model';
import { TokenIssuancePolicyModel } from './tokenissuancepolicy.model';
import { TokenLifetimePolicyModel } from './tokenlifetimepolicy.model';
import { ClaimsMappingPolicyModel } from './claimsmappingpolicy.model';
import { EndpointModel } from './endpoint.model';
import { AddInCollection } from './addin.collection';
import { PermissionScopeCollection } from './permissionscope.collection';
import { AppRoleCollection } from './approle.collection';
import { InformationalUrlCollection } from './informationalurl.collection';
import { KeyCredentialCollection } from './keycredential.collection';
import { PasswordCredentialCollection } from './passwordcredential.collection';
import { SamlSingleSignOnSettingsCollection } from './samlsinglesignonsettings.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { AppRoleAssignmentCollection } from './approleassignment.collection';
import { OAuth2PermissionGrantCollection } from './oauth2permissiongrant.collection';
import { HomeRealmDiscoveryPolicyCollection } from './homerealmdiscoverypolicy.collection';
import { TokenIssuancePolicyCollection } from './tokenissuancepolicy.collection';
import { TokenLifetimePolicyCollection } from './tokenlifetimepolicy.collection';
import { ClaimsMappingPolicyCollection } from './claimsmappingpolicy.collection';
import { EndpointCollection } from './endpoint.collection';
import { ServicePrincipalCollection } from './serviceprincipal.collection';
//#endregion

export class ServicePrincipalModel<E extends ServicePrincipal> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  accountEnabled?: boolean;
  addIns: AddInCollection<AddIn, AddInModel<AddIn>>;
  alternativeNames: string[];
  appDescription?: string;
  appDisplayName?: string;
  appId?: string;
  applicationTemplateId?: string;
  appOwnerOrganizationId?: string;
  appRoleAssignmentRequired: boolean;
  appRoles: AppRoleCollection<AppRole, AppRoleModel<AppRole>>;
  description?: string;
  displayName?: string;
  homepage?: string;
  info?: InformationalUrlModel<InformationalUrl>;
  keyCredentials: KeyCredentialCollection<KeyCredential, KeyCredentialModel<KeyCredential>>;
  loginUrl?: string;
  logoutUrl?: string;
  notes?: string;
  notificationEmailAddresses: string[];
  oauth2PermissionScopes: PermissionScopeCollection<PermissionScope, PermissionScopeModel<PermissionScope>>;
  passwordCredentials: PasswordCredentialCollection<PasswordCredential, PasswordCredentialModel<PasswordCredential>>;
  preferredSingleSignOnMode?: string;
  preferredTokenSigningKeyThumbprint?: string;
  replyUrls: string[];
  samlSingleSignOnSettings?: SamlSingleSignOnSettingsModel<SamlSingleSignOnSettings>;
  servicePrincipalNames: string[];
  servicePrincipalType?: string;
  tags: string[];
  tokenEncryptionKeyId?: string;
  appRoleAssignedTo?: AppRoleAssignmentCollection<AppRoleAssignment, AppRoleAssignmentModel<AppRoleAssignment>>;
  appRoleAssignments?: AppRoleAssignmentCollection<AppRoleAssignment, AppRoleAssignmentModel<AppRoleAssignment>>;
  claimsMappingPolicies?: ClaimsMappingPolicyCollection<ClaimsMappingPolicy, ClaimsMappingPolicyModel<ClaimsMappingPolicy>>;
  createdObjects?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  endpoints?: EndpointCollection<Endpoint, EndpointModel<Endpoint>>;
  homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicyCollection<HomeRealmDiscoveryPolicy, HomeRealmDiscoveryPolicyModel<HomeRealmDiscoveryPolicy>>;
  memberOf?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  oauth2PermissionGrants?: OAuth2PermissionGrantCollection<OAuth2PermissionGrant, OAuth2PermissionGrantModel<OAuth2PermissionGrant>>;
  ownedObjects?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  owners?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  tokenIssuancePolicies?: TokenIssuancePolicyCollection<TokenIssuancePolicy, TokenIssuancePolicyModel<TokenIssuancePolicy>>;
  tokenLifetimePolicies?: TokenLifetimePolicyCollection<TokenLifetimePolicy, TokenLifetimePolicyModel<TokenLifetimePolicy>>;
  transitiveMemberOf?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  //#endregion
  //#region ODataApi Actions
  public addKey(keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string, options?: HttpOptions): Observable<KeyCredentialModel<KeyCredential>> {
    var res = this._action<{keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string}, KeyCredential>('microsoft.graph.addKey');
    res.segment.entitySet('servicePrincipals');
    return res.call({keyCredential, passwordCredential, proof}, 'model', options) as Observable<KeyCredentialModel<KeyCredential>>;
  }
  public addPassword(passwordCredential: PasswordCredential, options?: HttpOptions): Observable<PasswordCredentialModel<PasswordCredential>> {
    var res = this._action<{passwordCredential: PasswordCredential}, PasswordCredential>('microsoft.graph.addPassword');
    res.segment.entitySet('servicePrincipals');
    return res.call({passwordCredential}, 'model', options) as Observable<PasswordCredentialModel<PasswordCredential>>;
  }
  public removeKey(keyId: string, proof: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{keyId: string, proof: string}, any>('microsoft.graph.removeKey');
    res.segment.entitySet('servicePrincipals');
    return res.call({keyId, proof}, 'property', options) as Observable<any>;
  }
  public removePassword(keyId: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{keyId: string}, any>('microsoft.graph.removePassword');
    res.segment.entitySet('servicePrincipals');
    return res.call({keyId}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}