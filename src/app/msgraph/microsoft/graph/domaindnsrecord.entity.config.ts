import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsRecord } from './domaindnsrecord.entity';
//#endregion

export const DomainDnsRecordConfig = {
  name: "DomainDnsRecord",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    isOptional: {type: 'Edm.Boolean', nullable: false},
    label: {type: 'Edm.String', nullable: false},
    recordType: {type: 'Edm.String'},
    supportedService: {type: 'Edm.String', nullable: false},
    ttl: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<DomainDnsRecord>;