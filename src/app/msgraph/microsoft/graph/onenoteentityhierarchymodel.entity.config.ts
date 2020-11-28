import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntityHierarchyModel } from './onenoteentityhierarchymodel.entity';
import { OnenoteEntityHierarchyModelModel } from './onenoteentityhierarchymodel.model';
import { OnenoteEntityHierarchyModelCollection } from './onenoteentityhierarchymodel.collection';
//#endregion

export const OnenoteEntityHierarchyModelConfig = {
  name: "onenoteEntityHierarchyModel",
  base: "microsoft.graph.onenoteEntitySchemaObjectModel",
  model: OnenoteEntityHierarchyModelModel,
  collection: OnenoteEntityHierarchyModelCollection,
  annotations: [],
  fields: {
    createdBy: {type: 'graph.identitySet'},
    displayName: {type: 'Edm.String'},
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<OnenoteEntityHierarchyModel>;