import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsSrvRecord } from './domaindnssrvrecord.entity';
import { DomainDnsSrvRecordModel } from './domaindnssrvrecord.model';
import { DomainDnsSrvRecordCollection } from './domaindnssrvrecord.collection';
//#endregion

export const DomainDnsSrvRecordConfig = {
  name: "domainDnsSrvRecord",
  base: "microsoft.graph.domainDnsRecord",
  model: DomainDnsSrvRecordModel,
  collection: DomainDnsSrvRecordCollection,
  annotations: [],
  fields: {
    nameTarget: {type: 'Edm.String'},
    port: {type: 'Edm.Int32'},
    priority: {type: 'Edm.Int32'},
    protocol: {type: 'Edm.String'},
    service: {type: 'Edm.String'},
    weight: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<DomainDnsSrvRecord>;