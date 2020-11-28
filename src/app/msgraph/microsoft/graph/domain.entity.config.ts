import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Domain } from './domain.entity';
import { DomainModel } from './domain.model';
import { DomainCollection } from './domain.collection';
//#endregion

export const DomainConfig = {
  name: "domain",
  base: "microsoft.graph.entity",
  model: DomainModel,
  collection: DomainCollection,
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
    state: {type: 'graph.domainState'},
    supportedServices: {type: 'Edm.String', nullable: false, collection: true},
    domainNameReferences: {type: 'graph.directoryObject', collection: true, navigation: true},
    serviceConfigurationRecords: {type: 'graph.domainDnsRecord', collection: true, navigation: true},
    verificationDnsRecords: {type: 'graph.domainDnsRecord', collection: true, navigation: true}
  }
} as EntityConfig<Domain>;