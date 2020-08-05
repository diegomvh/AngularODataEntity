import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Organization } from './organization.entity';
//#endregion

export const OrganizationConfig = {
  name: "Organization",
  base: "microsoft.graph.directoryObject",
  open: true,
  annotations: [],
  fields: {
    assignedPlans: {type: 'graph.assignedPlan', nullable: false, collection: true},
    businessPhones: {type: 'Edm.String', nullable: false, collection: true},
    city: {type: 'Edm.String'},
    country: {type: 'Edm.String'},
    countryLetterCode: {type: 'Edm.String'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    displayName: {type: 'Edm.String'},
    marketingNotificationEmails: {type: 'Edm.String', nullable: false, collection: true},
    onPremisesLastSyncDateTime: {type: 'Edm.DateTimeOffset'},
    onPremisesSyncEnabled: {type: 'Edm.Boolean'},
    postalCode: {type: 'Edm.String'},
    preferredLanguage: {type: 'Edm.String'},
    privacyProfile: {type: 'graph.privacyProfile'},
    provisionedPlans: {type: 'graph.provisionedPlan', nullable: false, collection: true},
    securityComplianceNotificationMails: {type: 'Edm.String', nullable: false, collection: true},
    securityComplianceNotificationPhones: {type: 'Edm.String', nullable: false, collection: true},
    state: {type: 'Edm.String'},
    street: {type: 'Edm.String'},
    technicalNotificationMails: {type: 'Edm.String', nullable: false, collection: true},
    verifiedDomains: {type: 'graph.verifiedDomain', nullable: false, collection: true},
    mobileDeviceManagementAuthority: {type: 'graph.mdmAuthority', nullable: false},
    certificateBasedAuthConfiguration: {type: 'graph.certificateBasedAuthConfiguration', collection: true, navigation: true},
    extensions: {type: 'graph.extension', collection: true, navigation: true}
  }
} as EntityConfig<Organization>;