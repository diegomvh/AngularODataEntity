import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsTxtRecord } from './domaindnstxtrecord.entity';
import { DomainDnsTxtRecordModel } from './domaindnstxtrecord.model';
import { DomainDnsTxtRecordCollection } from './domaindnstxtrecord.collection';
//#endregion

export const DomainDnsTxtRecordConfig = {
  name: "domainDnsTxtRecord",
  base: "microsoft.graph.domainDnsRecord",
  model: DomainDnsTxtRecordModel,
  collection: DomainDnsTxtRecordCollection,
  annotations: [],
  fields: {
    text: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<DomainDnsTxtRecord>;