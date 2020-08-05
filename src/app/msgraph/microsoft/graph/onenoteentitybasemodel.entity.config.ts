import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntityBaseModel } from './onenoteentitybasemodel.entity';
//#endregion

export const OnenoteEntityBaseModelConfig = {
  name: "onenoteEntityBaseModel",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    self: {type: 'Edm.String'}
  }
} as EntityConfig<OnenoteEntityBaseModel>;