import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenFolderPage } from './ioshomescreenfolderpage.entity';
//#endregion

export const IosHomeScreenFolderPageConfig = {
  name: "iosHomeScreenFolderPage",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    apps: {type: 'graph.iosHomeScreenApp', nullable: false, collection: true}
  }
} as EntityConfig<IosHomeScreenFolderPage>;