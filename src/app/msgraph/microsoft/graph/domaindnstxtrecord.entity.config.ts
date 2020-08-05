import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsTxtRecord } from './domaindnstxtrecord.entity';
//#endregion

export const DomainDnsTxtRecordConfig = {
  name: "DomainDnsTxtRecord",
  base: "microsoft.graph.domainDnsRecord",
  annotations: [],
  fields: {
    text: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<DomainDnsTxtRecord>;