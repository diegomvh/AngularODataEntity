import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OutlookUser } from './outlookuser.entity';
import { OutlookUserModel } from './outlookuser.model';
import { OutlookUserCollection } from './outlookuser.collection';
//#endregion

export const OutlookUserConfig = {
  name: "outlookUser",
  base: "microsoft.graph.entity",
  model: OutlookUserModel,
  collection: OutlookUserCollection,
  annotations: [],
  fields: {
    masterCategories: {type: 'graph.outlookCategory', collection: true, navigation: true}
  }
} as StructuredTypeConfig<OutlookUser>;