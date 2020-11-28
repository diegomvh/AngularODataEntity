import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrgContact } from './orgcontact.entity';
import { OrgContactModel } from './orgcontact.model';
import { OrgContactCollection } from './orgcontact.collection';
//#endregion

export const OrgContactConfig = {
  name: "orgContact",
  base: "microsoft.graph.directoryObject",
  open: true,
  model: OrgContactModel,
  collection: OrgContactCollection,
  annotations: [],
  fields: {
    addresses: {type: 'graph.physicalOfficeAddress', collection: true},
    companyName: {type: 'Edm.String'},
    department: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    givenName: {type: 'Edm.String'},
    jobTitle: {type: 'Edm.String'},
    mail: {type: 'Edm.String'},
    mailNickname: {type: 'Edm.String'},
    onPremisesLastSyncDateTime: {type: 'Edm.DateTimeOffset'},
    onPremisesProvisioningErrors: {type: 'graph.onPremisesProvisioningError', collection: true},
    onPremisesSyncEnabled: {type: 'Edm.Boolean'},
    phones: {type: 'graph.phone', collection: true},
    proxyAddresses: {type: 'Edm.String', nullable: false, collection: true},
    surname: {type: 'Edm.String'},
    directReports: {type: 'graph.directoryObject', collection: true, navigation: true},
    manager: {type: 'graph.directoryObject', navigation: true},
    memberOf: {type: 'graph.directoryObject', collection: true, navigation: true},
    transitiveMemberOf: {type: 'graph.directoryObject', collection: true, navigation: true}
  }
} as EntityConfig<OrgContact>;