import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { VerifiedDomain } from './verifieddomain.entity';
import { VerifiedDomainModel } from './verifieddomain.model';
import { VerifiedDomainCollection } from './verifieddomain.collection';
//#endregion

export const VerifiedDomainConfig = {
  name: "verifiedDomain",
  model: VerifiedDomainModel,
  collection: VerifiedDomainCollection,
  annotations: [],
  fields: {
    capabilities: {type: 'Edm.String'},
    isDefault: {type: 'Edm.Boolean'},
    isInitial: {type: 'Edm.Boolean'},
    name: {type: 'Edm.String'},
    type: {type: 'Edm.String'}
  }
} as EntityConfig<VerifiedDomain>;