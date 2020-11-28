import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { AuditEntryState } from './auditentrystate.enum';
//#endregion

export const AuditEntryStateConfig = {
  name: "AuditEntryState",
  members: AuditEntryState
} as EnumConfig<AuditEntryState>;