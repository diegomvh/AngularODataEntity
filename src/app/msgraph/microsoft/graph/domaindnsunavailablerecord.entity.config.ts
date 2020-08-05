import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsUnavailableRecord } from './domaindnsunavailablerecord.entity';
//#endregion

export const DomainDnsUnavailableRecordConfig = {
  name: "DomainDnsUnavailableRecord",
  base: "microsoft.graph.domainDnsRecord",
  annotations: [],
  fields: {
    description: {type: 'Edm.String'}
  }
} as EntityConfig<DomainDnsUnavailableRecord>;