import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppDiagnosticStatus } from './managedappdiagnosticstatus.complex';
import { ManagedAppDiagnosticStatusModel } from './managedappdiagnosticstatus.model';
import { ManagedAppDiagnosticStatusCollection } from './managedappdiagnosticstatus.collection';
//#endregion

export const ManagedAppDiagnosticStatusConfig = {
  name: "managedAppDiagnosticStatus",
  model: ManagedAppDiagnosticStatusModel,
  collection: ManagedAppDiagnosticStatusCollection,
  annotations: [],
  fields: {
    mitigationInstruction: {type: 'Edm.String'},
    state: {type: 'Edm.String'},
    validationName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedAppDiagnosticStatus>;