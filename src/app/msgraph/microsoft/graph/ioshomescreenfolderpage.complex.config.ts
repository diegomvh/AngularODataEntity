import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenFolderPage } from './ioshomescreenfolderpage.complex';
import { IosHomeScreenFolderPageModel } from './ioshomescreenfolderpage.model';
import { IosHomeScreenFolderPageCollection } from './ioshomescreenfolderpage.collection';
//#endregion

export const IosHomeScreenFolderPageConfig = {
  name: "iosHomeScreenFolderPage",
  model: IosHomeScreenFolderPageModel,
  collection: IosHomeScreenFolderPageCollection,
  annotations: [],
  fields: {
    apps: {type: 'graph.iosHomeScreenApp', nullable: false, collection: true},
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<IosHomeScreenFolderPage>;