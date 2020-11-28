import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
//#endregion

export const ChangeTrackedEntityConfig = {
  name: "changeTrackedEntity",
  base: "microsoft.graph.entity",
  model: ChangeTrackedEntityModel,
  collection: ChangeTrackedEntityCollection,
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<ChangeTrackedEntity>;