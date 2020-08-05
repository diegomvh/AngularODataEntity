import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Diagnostic } from './diagnostic.entity';
//#endregion

export const DiagnosticConfig = {
  name: "Diagnostic",
  annotations: [],
  fields: {
    message: {type: 'Edm.String'},
    url: {type: 'Edm.String'}
  }
} as EntityConfig<Diagnostic>;