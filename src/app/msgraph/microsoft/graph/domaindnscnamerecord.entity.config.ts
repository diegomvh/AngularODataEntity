import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsCnameRecord } from './domaindnscnamerecord.entity';
//#endregion

export const DomainDnsCnameRecordConfig = {
  name: "DomainDnsCnameRecord",
  base: "microsoft.graph.domainDnsRecord",
  annotations: [],
  fields: {
    canonicalName: {type: 'Edm.String'}
  }
} as EntityConfig<DomainDnsCnameRecord>;