import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppDiagnosticStatus } from './managedappdiagnosticstatus.entity';
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
} as EntityConfig<ManagedAppDiagnosticStatus>;