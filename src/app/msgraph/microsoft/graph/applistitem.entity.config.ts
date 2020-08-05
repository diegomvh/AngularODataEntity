import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppListItem } from './applistitem.entity';
//#endregion

export const AppListItemConfig = {
  name: "appListItem",
  annotations: [],
  fields: {
    name: {type: 'Edm.String', nullable: false},
    publisher: {type: 'Edm.String'},
    appStoreUrl: {type: 'Edm.String'},
    appId: {type: 'Edm.String'}
  }
} as EntityConfig<AppListItem>;