import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppDiagnosticStatus } from './managedappdiagnosticstatus.entity';
//#endregion

export const ManagedAppDiagnosticStatusConfig = {
  name: "ManagedAppDiagnosticStatus",
  annotations: [],
  fields: {
    validationName: {type: 'Edm.String'},
    state: {type: 'Edm.String'},
    mitigationInstruction: {type: 'Edm.String'}
  }
} as EntityConfig<ManagedAppDiagnosticStatus>;