import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProxiedDomain } from './proxieddomain.entity';
//#endregion

export const ProxiedDomainConfig = {
  name: "ProxiedDomain",
  annotations: [],
  fields: {
    ipAddressOrFQDN: {type: 'Edm.String', nullable: false},
    proxy: {type: 'Edm.String'}
  }
} as EntityConfig<ProxiedDomain>;