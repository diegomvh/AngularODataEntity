import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsUnavailableRecord } from './domaindnsunavailablerecord.entity';
import { DomainDnsUnavailableRecordModel } from './domaindnsunavailablerecord.model';
import { DomainDnsUnavailableRecordCollection } from './domaindnsunavailablerecord.collection';
//#endregion

export const DomainDnsUnavailableRecordConfig = {
  name: "domainDnsUnavailableRecord",
  base: "microsoft.graph.domainDnsRecord",
  model: DomainDnsUnavailableRecordModel,
  collection: DomainDnsUnavailableRecordCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'}
  }
} as EntityConfig<DomainDnsUnavailableRecord>;