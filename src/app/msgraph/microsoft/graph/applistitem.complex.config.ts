import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppListItem } from './applistitem.complex';
import { AppListItemModel } from './applistitem.model';
import { AppListItemCollection } from './applistitem.collection';
//#endregion

export const AppListItemConfig = {
  name: "appListItem",
  model: AppListItemModel,
  collection: AppListItemCollection,
  annotations: [],
  fields: {
    appId: {type: 'Edm.String'},
    appStoreUrl: {type: 'Edm.String'},
    name: {type: 'Edm.String', nullable: false},
    publisher: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AppListItem>;