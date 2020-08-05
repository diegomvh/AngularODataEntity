import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ListItem } from './listitem.entity';
//#endregion

export const ListItemConfig = {
  name: "ListItem",
  base: "microsoft.graph.baseItem",
  annotations: [],
  fields: {
    contentType: {type: 'graph.contentTypeInfo'},
    sharepointIds: {type: 'graph.sharepointIds'},
    analytics: {type: 'graph.itemAnalytics', navigation: true},
    driveItem: {type: 'graph.driveItem', navigation: true},
    fields: {type: 'graph.fieldValueSet', navigation: true},
    versions: {type: 'graph.listItemVersion', collection: true, navigation: true}
  }
} as EntityConfig<ListItem>;