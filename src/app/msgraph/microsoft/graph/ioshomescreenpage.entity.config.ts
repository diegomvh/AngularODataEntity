import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenPage } from './ioshomescreenpage.entity';
//#endregion

export const IosHomeScreenPageConfig = {
  name: "iosHomeScreenPage",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    icons: {type: 'graph.iosHomeScreenItem', nullable: false, collection: true}
  }
} as EntityConfig<IosHomeScreenPage>;