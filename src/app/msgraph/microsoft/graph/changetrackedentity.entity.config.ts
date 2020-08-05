import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
//#endregion

export const ChangeTrackedEntityConfig = {
  name: "changeTrackedEntity",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedBy: {type: 'graph.identitySet'}
  }
} as EntityConfig<ChangeTrackedEntity>;