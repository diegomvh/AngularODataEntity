import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppListItem } from './applistitem.entity';
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
} as EntityConfig<AppListItem>;