import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProxiedDomain } from './proxieddomain.complex';
import { ProxiedDomainModel } from './proxieddomain.model';
import { ProxiedDomainCollection } from './proxieddomain.collection';
//#endregion

export const ProxiedDomainConfig = {
  name: "proxiedDomain",
  model: ProxiedDomainModel,
  collection: ProxiedDomainCollection,
  annotations: [],
  fields: {
    ipAddressOrFQDN: {type: 'Edm.String', nullable: false},
    proxy: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ProxiedDomain>;