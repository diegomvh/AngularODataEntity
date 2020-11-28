import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsCnameRecord } from './domaindnscnamerecord.entity';
import { DomainDnsCnameRecordModel } from './domaindnscnamerecord.model';
import { DomainDnsCnameRecordCollection } from './domaindnscnamerecord.collection';
//#endregion

export const DomainDnsCnameRecordConfig = {
  name: "domainDnsCnameRecord",
  base: "microsoft.graph.domainDnsRecord",
  model: DomainDnsCnameRecordModel,
  collection: DomainDnsCnameRecordCollection,
  annotations: [],
  fields: {
    canonicalName: {type: 'Edm.String'}
  }
} as EntityConfig<DomainDnsCnameRecord>;