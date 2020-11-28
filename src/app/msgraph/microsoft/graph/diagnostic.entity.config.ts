import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Diagnostic } from './diagnostic.entity';
import { DiagnosticModel } from './diagnostic.model';
import { DiagnosticCollection } from './diagnostic.collection';
//#endregion

export const DiagnosticConfig = {
  name: "diagnostic",
  model: DiagnosticModel,
  collection: DiagnosticCollection,
  annotations: [],
  fields: {
    message: {type: 'Edm.String'},
    url: {type: 'Edm.String'}
  }
} as EntityConfig<Diagnostic>;