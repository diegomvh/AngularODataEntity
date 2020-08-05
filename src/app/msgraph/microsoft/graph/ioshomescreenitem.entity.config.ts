import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenItem } from './ioshomescreenitem.entity';
//#endregion

export const IosHomeScreenItemConfig = {
  name: "IosHomeScreenItem",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'}
  }
} as EntityConfig<IosHomeScreenItem>;