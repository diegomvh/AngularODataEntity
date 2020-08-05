import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Domain } from './domain.entity';
//#endregion

export const DomainConfig = {
  name: "domain",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    authenticationType: {type: 'Edm.String', nullable: false},
    availabilityStatus: {type: 'Edm.String'},
    isAdminManaged: {type: 'Edm.Boolean', nullable: false},
    isDefault: {type: 'Edm.Boolean', nullable: false},
    isInitial: {type: 'Edm.Boolean', nullable: false},
    isRoot: {type: 'Edm.Boolean', nullable: false},
    isVerified: {type: 'Edm.Boolean', nullable: false},
    manufacturer: {type: 'Edm.String'},
    model: {type: 'Edm.String'},
    passwordNotificationWindowInDays: {type: 'Edm.Int32'},
    passwordValidityPeriodInDays: {type: 'Edm.Int32'},
    supportedServices: {type: 'Edm.String', nullable: false, collection: true},
    state: {type: 'graph.domainState'},
    serviceConfigurationRecords: {type: 'graph.domainDnsRecord', collection: true, navigation: true},
    verificationDnsRecords: {type: 'graph.domainDnsRecord', collection: true, navigation: true},
    domainNameReferences: {type: 'graph.directoryObject', collection: true, navigation: true}
  }
} as EntityConfig<Domain>;