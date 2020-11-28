import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ListItem } from './listitem.entity';
import { ListItemModel } from './listitem.model';
import { ListItemCollection } from './listitem.collection';
//#endregion

export const ListItemConfig = {
  name: "listItem",
  base: "microsoft.graph.baseItem",
  model: ListItemModel,
  collection: ListItemCollection,
  annotations: [],
  fields: {
    contentType: {type: 'graph.contentTypeInfo'},
    sharepointIds: {type: 'graph.sharepointIds'},
    analytics: {type: 'graph.itemAnalytics', navigation: true},
    driveItem: {type: 'graph.driveItem', navigation: true},
    fields: {type: 'graph.fieldValueSet', navigation: true},
    versions: {type: 'graph.listItemVersion', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ListItem>;