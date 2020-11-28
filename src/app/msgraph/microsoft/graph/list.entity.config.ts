import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { List } from './list.entity';
import { ListModel } from './list.model';
import { ListCollection } from './list.collection';
//#endregion

export const ListConfig = {
  name: "list",
  base: "microsoft.graph.baseItem",
  model: ListModel,
  collection: ListCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    list: {type: 'graph.listInfo'},
    sharepointIds: {type: 'graph.sharepointIds'},
    system: {type: 'graph.systemFacet'},
    columns: {type: 'graph.columnDefinition', collection: true, navigation: true},
    contentTypes: {type: 'graph.contentType', collection: true, navigation: true},
    drive: {type: 'graph.drive', navigation: true},
    items: {type: 'graph.listItem', collection: true, navigation: true},
    subscriptions: {type: 'graph.subscription', collection: true, navigation: true}
  }
} as EntityConfig<List>;