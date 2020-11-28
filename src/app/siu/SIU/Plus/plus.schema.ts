import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { AuditEntryStateConfig } from './auditentrystate.enum.config';
import { AuditEntryConfig } from './auditentry.entity.config';
import { AuditEntryPropertyConfig } from './auditentryproperty.entity.config';
//#endregion

export const PlusSchema = {
  namespace: "SIU.Plus",
  enums: [AuditEntryStateConfig],
  entities: [AuditEntryConfig,
    AuditEntryPropertyConfig],
  callables: [],
  containers: []
} as SchemaConfig;