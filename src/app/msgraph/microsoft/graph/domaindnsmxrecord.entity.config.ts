import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsMxRecord } from './domaindnsmxrecord.entity';
import { DomainDnsMxRecordModel } from './domaindnsmxrecord.model';
import { DomainDnsMxRecordCollection } from './domaindnsmxrecord.collection';
//#endregion

export const DomainDnsMxRecordConfig = {
  name: "domainDnsMxRecord",
  base: "microsoft.graph.domainDnsRecord",
  model: DomainDnsMxRecordModel,
  collection: DomainDnsMxRecordCollection,
  annotations: [],
  fields: {
    mailExchange: {type: 'Edm.String', nullable: false},
    preference: {type: 'Edm.Int32'}
  }
} as EntityConfig<DomainDnsMxRecord>;