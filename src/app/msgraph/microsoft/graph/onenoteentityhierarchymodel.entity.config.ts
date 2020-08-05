import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntityHierarchyModel } from './onenoteentityhierarchymodel.entity';
//#endregion

export const OnenoteEntityHierarchyModelConfig = {
  name: "OnenoteEntityHierarchyModel",
  base: "microsoft.graph.onenoteEntitySchemaObjectModel",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    createdBy: {type: 'graph.identitySet'},
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<OnenoteEntityHierarchyModel>;