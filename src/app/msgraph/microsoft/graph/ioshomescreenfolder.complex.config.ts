import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenFolder } from './ioshomescreenfolder.complex';
import { IosHomeScreenFolderModel } from './ioshomescreenfolder.model';
import { IosHomeScreenFolderCollection } from './ioshomescreenfolder.collection';
//#endregion

export const IosHomeScreenFolderConfig = {
  name: "iosHomeScreenFolder",
  base: "microsoft.graph.iosHomeScreenItem",
  model: IosHomeScreenFolderModel,
  collection: IosHomeScreenFolderCollection,
  annotations: [],
  fields: {
    pages: {type: 'graph.iosHomeScreenFolderPage', nullable: false, collection: true}
  }
} as StructuredTypeConfig<IosHomeScreenFolder>;