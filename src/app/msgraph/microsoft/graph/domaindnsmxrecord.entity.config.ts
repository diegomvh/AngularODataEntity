import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsMxRecord } from './domaindnsmxrecord.entity';
//#endregion

export const DomainDnsMxRecordConfig = {
  name: "domainDnsMxRecord",
  base: "microsoft.graph.domainDnsRecord",
  annotations: [],
  fields: {
    mailExchange: {type: 'Edm.String', nullable: false},
    preference: {type: 'Edm.Int32'}
  }
} as EntityConfig<DomainDnsMxRecord>;