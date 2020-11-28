import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsRecord } from './domaindnsrecord.entity';
import { DomainDnsRecordModel } from './domaindnsrecord.model';
import { DomainDnsRecordCollection } from './domaindnsrecord.collection';
//#endregion

export const DomainDnsRecordConfig = {
  name: "domainDnsRecord",
  base: "microsoft.graph.entity",
  model: DomainDnsRecordModel,
  collection: DomainDnsRecordCollection,
  annotations: [],
  fields: {
    isOptional: {type: 'Edm.Boolean', nullable: false},
    label: {type: 'Edm.String', nullable: false},
    recordType: {type: 'Edm.String'},
    supportedService: {type: 'Edm.String', nullable: false},
    ttl: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<DomainDnsRecord>;