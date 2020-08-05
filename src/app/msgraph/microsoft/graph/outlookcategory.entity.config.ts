import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OutlookCategory } from './outlookcategory.entity';
//#endregion

export const OutlookCategoryConfig = {
  name: "outlookCategory",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    color: {type: 'graph.categoryColor'}
  }
} as EntityConfig<OutlookCategory>;