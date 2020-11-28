import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
import { AddIn } from './addin.complex';
import { ApiApplication } from './apiapplication.complex';
import { AppRole } from './approle.complex';
import { InformationalUrl } from './informationalurl.complex';
import { KeyCredential } from './keycredential.complex';
import { OptionalClaims } from './optionalclaims.complex';
import { ParentalControlSettings } from './parentalcontrolsettings.complex';
import { PasswordCredential } from './passwordcredential.complex';
import { PublicClientApplication } from './publicclientapplication.complex';
import { RequiredResourceAccess } from './requiredresourceaccess.complex';
import { WebApplication } from './webapplication.complex';
import { DirectoryObject } from './directoryobject.entity';
import { Application } from './application.entity';
import { ExtensionProperty } from './extensionproperty.entity';
import { HomeRealmDiscoveryPolicy } from './homerealmdiscoverypolicy.entity';
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
import { AddInModel } from './addin.model';
import { ApiApplicationModel } from './apiapplication.model';
import { AppRoleModel } from './approle.model';
import { InformationalUrlModel } from './informationalurl.model';
import { KeyCredentialModel } from './keycredential.model';
import { OptionalClaimsModel } from './optionalclaims.model';
import { ParentalControlSettingsModel } from './parentalcontrolsettings.model';
import { PasswordCredentialModel } from './passwordcredential.model';
import { PublicClientApplicationModel } from './publicclientapplication.model';
import { RequiredResourceAccessModel } from './requiredresourceaccess.model';
import { WebApplicationModel } from './webapplication.model';
import { ExtensionPropertyModel } from './extensionproperty.model';
import { HomeRealmDiscoveryPolicyModel } from './homerealmdiscoverypolicy.model';
import { TokenIssuancePolicyModel } from './tokenissuancepolicy.model';
import { TokenLifetimePolicyModel } from './tokenlifetimepolicy.model';
import { AddInCollection } from './addin.collection';
import { ApiApplicationCollection } from './apiapplication.collection';
import { AppRoleCollection } from './approle.collection';
import { InformationalUrlCollection } from './informationalurl.collection';
import { KeyCredentialCollection } from './keycredential.collection';
import { OptionalClaimsCollection } from './optionalclaims.collection';
import { ParentalControlSettingsCollection } from './parentalcontrolsettings.collection';
import { PasswordCredentialCollection } from './passwordcredential.collection';
import { PublicClientApplicationCollection } from './publicclientapplication.collection';
import { RequiredResourceAccessCollection } from './requiredresourceaccess.collection';
import { WebApplicationCollection } from './webapplication.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { ApplicationCollection } from './application.collection';
import { ExtensionPropertyCollection } from './extensionproperty.collection';
import { HomeRealmDiscoveryPolicyCollection } from './homerealmdiscoverypolicy.collection';
import { TokenIssuancePolicyCollection } from './tokenissuancepolicy.collection';
import { TokenLifetimePolicyCollection } from './tokenlifetimepolicy.collection';
//#endregion

export class ApplicationModel<E extends Application> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  addIns: AddInCollection<AddIn, AddInModel<AddIn>>;
  api?: ApiApplicationModel<ApiApplication>;
  appId?: string;
  applicationTemplateId?: string;
  appRoles: AppRoleCollection<AppRole, AppRoleModel<AppRole>>;
  createdDateTime?: Date;
  description?: string;
  displayName?: string;
  groupMembershipClaims?: string;
  identifierUris: string[];
  info?: InformationalUrlModel<InformationalUrl>;
  isDeviceOnlyAuthSupported?: boolean;
  isFallbackPublicClient?: boolean;
  keyCredentials: KeyCredentialCollection<KeyCredential, KeyCredentialModel<KeyCredential>>;
  logo: any;
  notes?: string;
  oauth2RequirePostResponse: boolean;
  optionalClaims?: OptionalClaimsModel<OptionalClaims>;
  parentalControlSettings?: ParentalControlSettingsModel<ParentalControlSettings>;
  passwordCredentials: PasswordCredentialCollection<PasswordCredential, PasswordCredentialModel<PasswordCredential>>;
  publicClient?: PublicClientApplicationModel<PublicClientApplication>;
  publisherDomain?: string;
  requiredResourceAccess: RequiredResourceAccessCollection<RequiredResourceAccess, RequiredResourceAccessModel<RequiredResourceAccess>>;
  signInAudience?: string;
  tags: string[];
  tokenEncryptionKeyId?: string;
  web?: WebApplicationModel<WebApplication>;
  createdOnBehalfOf?: DirectoryObjectModel<DirectoryObject>;
  extensionProperties?: ExtensionPropertyCollection<ExtensionProperty, ExtensionPropertyModel<ExtensionProperty>>;
  homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicyCollection<HomeRealmDiscoveryPolicy, HomeRealmDiscoveryPolicyModel<HomeRealmDiscoveryPolicy>>;
  owners?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  tokenIssuancePolicies?: TokenIssuancePolicyCollection<TokenIssuancePolicy, TokenIssuancePolicyModel<TokenIssuancePolicy>>;
  tokenLifetimePolicies?: TokenLifetimePolicyCollection<TokenLifetimePolicy, TokenLifetimePolicyModel<TokenLifetimePolicy>>;
  //#endregion
  //#region ODataApi Actions
  public addKey(keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string, options?: HttpOptions): Observable<KeyCredentialModel<KeyCredential>> {
    var res = this._action<{keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string}, KeyCredential>('microsoft.graph.addKey');
    res.segment.entitySet('applications');
    return res.call({keyCredential, passwordCredential, proof}, 'model', options) as Observable<KeyCredentialModel<KeyCredential>>;
  }
  public addPassword(passwordCredential: PasswordCredential, options?: HttpOptions): Observable<PasswordCredentialModel<PasswordCredential>> {
    var res = this._action<{passwordCredential: PasswordCredential}, PasswordCredential>('microsoft.graph.addPassword');
    res.segment.entitySet('applications');
    return res.call({passwordCredential}, 'model', options) as Observable<PasswordCredentialModel<PasswordCredential>>;
  }
  public removeKey(keyId: string, proof: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{keyId: string, proof: string}, any>('microsoft.graph.removeKey');
    res.segment.entitySet('applications');
    return res.call({keyId, proof}, 'property', options) as Observable<any>;
  }
  public removePassword(keyId: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{keyId: string}, any>('microsoft.graph.removePassword');
    res.segment.entitySet('applications');
    return res.call({keyId}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}