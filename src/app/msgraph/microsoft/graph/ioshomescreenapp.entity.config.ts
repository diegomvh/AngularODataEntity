import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenApp } from './ioshomescreenapp.entity';
import { IosHomeScreenAppModel } from './ioshomescreenapp.model';
import { IosHomeScreenAppCollection } from './ioshomescreenapp.collection';
//#endregion

export const IosHomeScreenAppConfig = {
  name: "iosHomeScreenApp",
  base: "microsoft.graph.iosHomeScreenItem",
  model: IosHomeScreenAppModel,
  collection: IosHomeScreenAppCollection,
  annotations: [],
  fields: {
    bundleID: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<IosHomeScreenApp>;