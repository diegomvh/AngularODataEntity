import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Application } from './application.entity';
import { ApplicationModel } from './application.model';
import { ApplicationCollection } from './application.collection';
//#endregion

export const ApplicationConfig = {
  name: "application",
  base: "microsoft.graph.directoryObject",
  open: true,
  model: ApplicationModel,
  collection: ApplicationCollection,
  annotations: [],
  fields: {
    addIns: {type: 'graph.addIn', nullable: false, collection: true},
    api: {type: 'graph.apiApplication'},
    appId: {type: 'Edm.String'},
    applicationTemplateId: {type: 'Edm.String'},
    appRoles: {type: 'graph.appRole', nullable: false, collection: true},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    groupMembershipClaims: {type: 'Edm.String'},
    identifierUris: {type: 'Edm.String', nullable: false, collection: true},
    info: {type: 'graph.informationalUrl'},
    isDeviceOnlyAuthSupported: {type: 'Edm.Boolean'},
    isFallbackPublicClient: {type: 'Edm.Boolean'},
    keyCredentials: {type: 'graph.keyCredential', nullable: false, collection: true},
    logo: {type: 'Edm.Stream', nullable: false},
    notes: {type: 'Edm.String'},
    oauth2RequirePostResponse: {type: 'Edm.Boolean', nullable: false},
    optionalClaims: {type: 'graph.optionalClaims'},
    parentalControlSettings: {type: 'graph.parentalControlSettings'},
    passwordCredentials: {type: 'graph.passwordCredential', nullable: false, collection: true},
    publicClient: {type: 'graph.publicClientApplication'},
    publisherDomain: {type: 'Edm.String'},
    requiredResourceAccess: {type: 'graph.requiredResourceAccess', nullable: false, collection: true},
    signInAudience: {type: 'Edm.String'},
    tags: {type: 'Edm.String', nullable: false, collection: true},
    tokenEncryptionKeyId: {type: 'Edm.Guid'},
    web: {type: 'graph.webApplication'},
    createdOnBehalfOf: {type: 'graph.directoryObject', navigation: true},
    extensionProperties: {type: 'graph.extensionProperty', collection: true, navigation: true},
    homeRealmDiscoveryPolicies: {type: 'graph.homeRealmDiscoveryPolicy', collection: true, navigation: true},
    owners: {type: 'graph.directoryObject', collection: true, navigation: true},
    tokenIssuancePolicies: {type: 'graph.tokenIssuancePolicy', collection: true, navigation: true},
    tokenLifetimePolicies: {type: 'graph.tokenLifetimePolicy', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Application>;