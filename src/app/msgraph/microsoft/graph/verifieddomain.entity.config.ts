import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { VerifiedDomain } from './verifieddomain.entity';
//#endregion

export const VerifiedDomainConfig = {
  name: "VerifiedDomain",
  annotations: [],
  fields: {
    capabilities: {type: 'Edm.String'},
    isDefault: {type: 'Edm.Boolean'},
    isInitial: {type: 'Edm.Boolean'},
    name: {type: 'Edm.String'},
    type: {type: 'Edm.String'}
  }
} as EntityConfig<VerifiedDomain>;