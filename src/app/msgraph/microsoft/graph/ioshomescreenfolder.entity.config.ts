import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenFolder } from './ioshomescreenfolder.entity';
//#endregion

export const IosHomeScreenFolderConfig = {
  name: "iosHomeScreenFolder",
  base: "microsoft.graph.iosHomeScreenItem",
  annotations: [],
  fields: {
    pages: {type: 'graph.iosHomeScreenFolderPage', nullable: false, collection: true}
  }
} as EntityConfig<IosHomeScreenFolder>;