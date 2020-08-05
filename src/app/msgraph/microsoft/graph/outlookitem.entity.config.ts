import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OutlookItem } from './outlookitem.entity';
//#endregion

export const OutlookItemConfig = {
  name: "OutlookItem",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    changeKey: {type: 'Edm.String'},
    categories: {type: 'Edm.String', collection: true}
  }
} as EntityConfig<OutlookItem>;