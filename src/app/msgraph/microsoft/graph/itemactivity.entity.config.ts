import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ItemActivity } from './itemactivity.entity';
import { ItemActivityModel } from './itemactivity.model';
import { ItemActivityCollection } from './itemactivity.collection';
//#endregion

export const ItemActivityConfig = {
  name: "itemActivity",
  base: "microsoft.graph.entity",
  open: true,
  model: ItemActivityModel,
  collection: ItemActivityCollection,
  annotations: [],
  fields: {
    access: {type: 'graph.accessAction'},
    activityDateTime: {type: 'Edm.DateTimeOffset'},
    actor: {type: 'graph.identitySet'},
    driveItem: {type: 'graph.driveItem', navigation: true}
  }
} as StructuredTypeConfig<ItemActivity>;