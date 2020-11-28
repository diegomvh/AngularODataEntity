import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenItem } from './ioshomescreenitem.complex';
import { IosHomeScreenItemModel } from './ioshomescreenitem.model';
import { IosHomeScreenItemCollection } from './ioshomescreenitem.collection';
//#endregion

export const IosHomeScreenItemConfig = {
  name: "iosHomeScreenItem",
  model: IosHomeScreenItemModel,
  collection: IosHomeScreenItemCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<IosHomeScreenItem>;