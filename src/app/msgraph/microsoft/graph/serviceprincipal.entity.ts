import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { AddIn } from './addin.entity';
import { PermissionScope } from './permissionscope.entity';
import { AppRole } from './approle.entity';
import { InformationalUrl } from './informationalurl.entity';
import { KeyCredential } from './keycredential.entity';
import { PasswordCredential } from './passwordcredential.entity';
import { SamlSingleSignOnSettings } from './samlsinglesignonsettings.entity';
import { AppRoleAssignment } from './approleassignment.entity';
import { OAuth2PermissionGrant } from './oauth2permissiongrant.entity';
import { HomeRealmDiscoveryPolicy } from './homerealmdiscoverypolicy.entity';
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
import { Endpoint } from './endpoint.entity';
import { ClaimsMappingPolicy } from './claimsmappingpolicy.entity';
//#endregion

export interface ServicePrincipal extends DirectoryObject {
  //#region ODataApi Properties
  accountEnabled?: boolean;
  addIns: AddIn[];
  alternativeNames: string[];
  appDisplayName?: string;
  appId?: string;
  applicationTemplateId?: string;
  appOwnerOrganizationId?: string;
  appRoleAssignmentRequired: boolean;
  appRoles: AppRole[];
  displayName?: string;
  homepage?: string;
  info?: InformationalUrl;
  keyCredentials: KeyCredential[];
  loginUrl?: string;
  logoutUrl?: string;
  notificationEmailAddresses: string[];
  oauth2PermissionScopes: PermissionScope[];
  passwordCredentials: PasswordCredential[];
  preferredTokenSigningKeyThumbprint?: string;
  preferredSingleSignOnMode?: string;
  replyUrls: string[];
  servicePrincipalNames: string[];
  samlSingleSignOnSettings?: SamlSingleSignOnSettings;
  servicePrincipalType?: string;
  tags: string[];
  tokenEncryptionKeyId?: string;
  appRoleAssignedTo?: AppRoleAssignment[];
  appRoleAssignments?: AppRoleAssignment[];
  claimsMappingPolicies?: ClaimsMappingPolicy[];
  endpoints?: Endpoint[];
  homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[];
  oauth2PermissionGrants?: OAuth2PermissionGrant[];
  memberOf?: DirectoryObject[];
  transitiveMemberOf?: DirectoryObject[];
  createdObjects?: DirectoryObject[];
  owners?: DirectoryObject[];
  ownedObjects?: DirectoryObject[];
  tokenIssuancePolicies?: TokenIssuancePolicy[];
  tokenLifetimePolicies?: TokenLifetimePolicy[];
  //#endregion
}