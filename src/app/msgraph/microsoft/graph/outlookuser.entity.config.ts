import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OutlookUser } from './outlookuser.entity';
//#endregion

export const OutlookUserConfig = {
  name: "outlookUser",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    masterCategories: {type: 'graph.outlookCategory', collection: true, navigation: true}
  }
} as EntityConfig<OutlookUser>;