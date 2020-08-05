import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenApp } from './ioshomescreenapp.entity';
//#endregion

export const IosHomeScreenAppConfig = {
  name: "IosHomeScreenApp",
  base: "microsoft.graph.iosHomeScreenItem",
  annotations: [],
  fields: {
    bundleID: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<IosHomeScreenApp>;