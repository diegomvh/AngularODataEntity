import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OutlookItem } from './outlookitem.entity';
import { OutlookItemModel } from './outlookitem.model';
import { OutlookItemCollection } from './outlookitem.collection';
//#endregion

export const OutlookItemConfig = {
  name: "outlookItem",
  base: "microsoft.graph.entity",
  model: OutlookItemModel,
  collection: OutlookItemCollection,
  annotations: [],
  fields: {
    categories: {type: 'Edm.String', collection: true},
    changeKey: {type: 'Edm.String'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<OutlookItem>;