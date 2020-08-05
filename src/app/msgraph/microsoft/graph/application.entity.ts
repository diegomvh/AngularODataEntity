import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { AddIn } from './addin.entity';
import { ApiApplication } from './apiapplication.entity';
import { AppRole } from './approle.entity';
import { PublicClientApplication } from './publicclientapplication.entity';
import { InformationalUrl } from './informationalurl.entity';
import { KeyCredential } from './keycredential.entity';
import { OptionalClaims } from './optionalclaims.entity';
import { ParentalControlSettings } from './parentalcontrolsettings.entity';
import { PasswordCredential } from './passwordcredential.entity';
import { RequiredResourceAccess } from './requiredresourceaccess.entity';
import { WebApplication } from './webapplication.entity';
import { ExtensionProperty } from './extensionproperty.entity';
import { HomeRealmDiscoveryPolicy } from './homerealmdiscoverypolicy.entity';
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
//#endregion

export interface Application extends DirectoryObject {
  //#region ODataApi Properties
  addIns: AddIn[];
  api?: ApiApplication;
  appId?: string;
  applicationTemplateId?: string;
  appRoles: AppRole[];
  isFallbackPublicClient?: boolean;
  identifierUris: string[];
  createdDateTime?: Date;
  publicClient?: PublicClientApplication;
  displayName?: string;
  groupMembershipClaims?: string;
  info?: InformationalUrl;
  isDeviceOnlyAuthSupported?: boolean;
  keyCredentials: KeyCredential[];
  logo: any;
  oauth2RequirePostResponse: boolean;
  optionalClaims?: OptionalClaims;
  parentalControlSettings?: ParentalControlSettings;
  passwordCredentials: PasswordCredential[];
  publisherDomain?: string;
  requiredResourceAccess: RequiredResourceAccess[];
  signInAudience?: string;
  tags: string[];
  tokenEncryptionKeyId?: string;
  web?: WebApplication;
  extensionProperties?: ExtensionProperty[];
  createdOnBehalfOf?: DirectoryObject;
  homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[];
  owners?: DirectoryObject[];
  tokenLifetimePolicies?: TokenLifetimePolicy[];
  tokenIssuancePolicies?: TokenIssuancePolicy[];
  //#endregion
}