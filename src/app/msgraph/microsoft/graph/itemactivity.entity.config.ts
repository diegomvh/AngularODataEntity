import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ItemActivity } from './itemactivity.entity';
//#endregion

export const ItemActivityConfig = {
  name: "ItemActivity",
  base: "microsoft.graph.entity",
  open: true,
  annotations: [],
  fields: {
    access: {type: 'graph.accessAction'},
    activityDateTime: {type: 'Edm.DateTimeOffset'},
    actor: {type: 'graph.identitySet'},
    driveItem: {type: 'graph.driveItem', navigation: true}
  }
} as EntityConfig<ItemActivity>;